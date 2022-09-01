# DAT250 Assignment 1

## Installation and validation of software development environment
I already had a JDK, an IDE and Git installed on my machine. I started by installing Maven, and assigning the <i>JAVA_HOME</i> environment variable. The installation was validated by running `mvn -v` in a new shell.

## Deploying to Heroku
I cloned the example app from Heroku. The app was created by running `heroku create` and deployed with `git push heroku main`. I ran `heroku ps` to validate that the dyno was running, as well as `heroku pg` to check the database status. `heroku logs --tail` was used to the check the application logs.

After adding an environment variable I used `heroku config` to verify that the variable was set on the deployed app.

## Deployed application
[Heroku App](https://sleepy-springs-02567.herokuapp.com/)