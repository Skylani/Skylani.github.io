# My Personal Website - [lanihuang.com](http://lanihuang.com)

![](./assets/images/lanihuang.com_laptop_phone.png)

Mobile overlay menu

![](./assets/images/overlay_menu.gif)
  


<p>I want to learn web development, so I build myself a website. It is built with Jekyll and GitHub Pages.</p>

<h3>Generating Jekyll site locally</h3>
<p>Since GitHub Pages natively support Jekyll, it can build the site for me once I push to the site's publishing branch. However, GitHub Pages only support a limited number of Jekyll plugins. As a DIY person, I chose to work around this by generating the site locally and then push the static files to my GitHub Pages site. This way, I can use any Jekyll plugins as I want. Also, I get to test the site locally before publishing it.</p>

<p>For this to work, I have to maintain two branches in my GitHub repo, one for editing, and the other for GitHub Pages. This sounds like a pain, but luckily I found <a href="//community.nitrous.io/posts/using-jekyll-plugins-on-github-pages" target="_blank">this</a> and learned to create a Rakefile to run those tedious tasks for me.</p>

<h3>I'm Lazy, so I learn Gulp</h3>
<p>As I develop this site, I came across so many inconvenience that led me to learn to use a build system, Gulp. After some googling and watching some YouTube videos, I can streamline the build process by automatically adding vendor prefixes, reloading browser when files are changed and etc.</p>

<h3>Tools</h3>

  <ul>
    <li>Site generator: <a href="//jekyllrb.com/" target="_blank">Jekyll</a></li>
    <li>Web hosting: <a href="//pages.github.com/" target="_blank">GitHub Pages</a></li>
    <li>Font: <a href="//fonts.google.com/specimen/Raleway" target="_blank">Raleway</a> served by <a href="//fonts.google.com" target="_blank">Google Fonts</a></li>
    <li>Masonry plugin: <a href="https://github.com/metafizzy/isotope" target="_blank">Isotope</a></li>
    <li>Hide navbar on scroll: <a href="http://wicky.nillia.ms/headroom.js/" target="_blank">Headroom.js</a></li>
    <li><a href="https://codepen.io/KingKabir/pen/QyPwgG" target="_blank">Full screen overlay menu</a></li>
    <li>Website statistics: <a href="//analytics.google.com/" target="_blank">Google Analytics</a></li>
    <li>Build system: <a href="//gulpjs.com/" target="_blank">Gulp</a></li>
  </ul>

  <span>Gulp plugins used:</span>
  <ul>
    <li><a href="//www.browsersync.io/" target="_blank">browser-sync</a>&nbsp; watch for file change and reload browser</li>
    <li><a href="//github.com/postcss/gulp-postcss" target="_blank">gulp-postcss</a>&nbsp; pipe CSS through several processors</li>
    <li><a href="//www.npmjs.com/package/gulp-sass" target="_blank">gulp-sass</a>&nbsp; compile Sass files</li>
    <li><a href="//github.com/postcss/autoprefixer" target="_blank">autoprefixer</a>&nbsp; add vendor prefixes</li>
    <li><a href="//github.com/contra/gulp-concat" target="_blank">gulp-concat</a>&nbsp; combine several files into one file</li>
  </ul>


