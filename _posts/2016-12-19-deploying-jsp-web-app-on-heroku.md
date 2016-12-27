---
layout: post
title: "Deploying JSP Web App on Heroku"
date: 2016-12-19
category: Web-Dev
---

Recently, I came across the term JavaServer Pages (JSP) on a job posting. I didn't know what that is, so in order to get the basic idea, I built a JSP web app using Eclipse following a [tutorial](http://o7planning.org/en/10285/create-a-simple-java-web-application-using-servlet-jsp-and-jdbc){:target="_blank"} and deployed it on Heroku. Check out this [simple web app](http://dry-scrubland-63512.herokuapp.com/){:target="_blank"} and its [source code](https://github.com/laniywh/simple-web-app){:target="_blank"}.
<!--more-->

After finishing the tutorial, we'll get a completed MySQL powered JSP web app on localhost. Now, let me talk about how to deploy it on Heroku.

## Create Heroku App

Let's get started by creating a heroku app first by running the following command in terminal:

```bash
$ heroku create
```

## Setup Database
Since Heroku doesn't natively support MySQL, we need to install the [ClearDB](http://w2.cleardb.net/){:target="_blank"} add-on in our app to provide MySQL support.

> ClearDB is a powerful, fault tolerant database-as-a-service in the cloud for your MySQL powered applications.

Install ClearDB and create a remote database:

```bash
$ heroku addons:create cleardb:ignite --app <app_name>
```

### Connect our app to ClearDB

Get our database URL:

```bash
$ heroku config | grep CLEARDB_DATABASE_URL
```

What we'll get:

```bash
CLEARDB_DATABASE_URL => mysql://adffdadf2341:adf4234@us-cdbr-east.cleardb.com/heroku_db?reconnect=true
```

It's in this format:

```
mysql://DB_USERNAME:DB_PASSWORD@DB_HOST/DB_NAME?reconnect=true
```

Then we use these information to change the connection parameters accordingly in our app.

Copy local database to remote database:

```
mysqldump -h [server] -u [user] -p[password] local_DB_name | mysql -h [server] -u [user] -p[password] remote_DB_name
```

## Deploy with Heroku CLI plugin

Install the `heroku-deploy` plugin:

```bash
$ heroku plugins:install heroku-cli-deploy
```

Create a WAR file of our app (Eclipse):<br>
Right click on the project > Export > WAR file


Deploy our WAR file:

```bash
$ heroku war:deploy <path_to_war_file> --app <app_name>
```

View our app on Heroku:

```bash
$ heroku open --app <app_name>
```


## Learning Resources
- [Installing Tomcat 8.5 on macOS 10.12 Sierra](https://wolfpaulus.com/journal/mac/tomcat8/){:target="_blank"}
- [Servlet JSP Tutorial](http://www.journaldev.com/2114/servlet-jsp-tutorial){:target="_blank"}
- [Create a Simple Java Web Application Using Servlet, JSP and JDBC](http://o7planning.org/en/10285/create-a-simple-java-web-application-using-servlet-jsp-and-jdbc){:target="_blank"}
- [JSP tricks to make templating easier?](http://stackoverflow.com/questions/1296235/jsp-tricks-to-make-templating-easier){:target="_blank"}
- [Spring MVC – How to include JS or CSS files in a JSP page](https://www.mkyong.com/spring-mvc/spring-mvc-how-to-include-js-or-css-files-in-a-jsp-page/){:target="_blank"}
- [Integrating Github With Eclipse](https://www.youtube.com/watch?v=ptK9-CNms98){:target="_blank"}
- [Connector/J Installation](http://dev.mysql.com/doc/connector-j/5.1/en/connector-j-installing.html){:target="_blank"}
- [ClearDB MySQL](https://devcenter.heroku.com/articles/cleardb){:target="_blank"}
- [Using MySQL on Heroku](http://selimsalihovic.github.io/2016-02-07-using-mysql-on-heroku/){:target="_blank"}
- [MySQL copy/duplicate database without using mysqldump](http://stackoverflow.com/questions/25794/mysql-copy-duplicate-database-without-using-mysqldump/7111224#7111224){:target="_blank"}
- [Heroku Deploy War/Jar](https://github.com/heroku/heroku-cli-deploy){:target="_blank"}

