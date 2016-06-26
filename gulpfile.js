var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('autoprefixer'),
    postcss = require('gulp-postcss'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;
    child = require('child_process');
    gutil = require('gulp-util');
    concat = require('gulp-concat');

    cssFiles = '_css/*.?(s)css';
    siteRoot = '_site';
    htmlFiles = '_site/**/*.html';

function errorlog(error) {
    console.error.bind(error);
    this.emit('end');
}

gulp.task('jekyll', function() {
    var jekyll = child.spawn('jekyll', ['serve',
        '--watch',
        '--incremental',
        '--drafts'
    ]);

    var jekyllLogger = function(buffer) {
        buffer.toString()
        .split(/\n/)
        .forEach((message) => gutil.log('Jekyll: ' + message));
    };

    jekyll.stdout.on('data', jekyllLogger);
    jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('styles', function() {
    var processors = [
      autoprefixer({browsers:['last 2 version']})
    ];

    gulp.src(cssFiles)
    .pipe(sass({
        outputStyle: 'compressed'
    })).on('error', errorlog)
    .pipe(concat('all.css'))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./assets'))
    .pipe(browserSync.stream());

});

gulp.task('watch', function() {
    browserSync.init({
        files: [siteRoot + '/**'],
        port: 4000,
        server: {
            baseDir: siteRoot
        }
    });
    gulp.watch(cssFiles, ['styles']);
    gulp.watch(htmlFiles).on("change", reload);
});

gulp.task('default', ['styles', 'watch', 'jekyll']);