# Deployed AirCamp Application v7

The deployed AirCamp application has migrated to another repository due to the increased volume of files in the [bootcamp repository](https://github.com/stevenxchung/Web-Developer-Bootcamp). This AirCamp (previously YelpCamp) application deployment series will be based on [YelpCamp v12 (deployed)](https://github.com/stevenxchung/Web-Developer-Bootcamp/tree/master/Section%2038%20-%20Deploying/v12Deployed). For more details and documentation please visit the linked YelpCamp v12 (deployed) repository mentioned previously. This website uses Heroku and mLab cloud database for hosting, you can see the latest stable build of the AirCamp application [here](https://powerful-meadow-57101.herokuapp.com/).

## UI Improvements (v1 updates)
In deployed v1 of this application we will be implementing the following improvements:
* Rebranding to AirCamp
* Refactoring the UI for Login and Sign Up pages
* Update the nav-bar menu
    * Convert .container fluid to regular .container
    * Add conditional active class to menu list items
    * Add collapsible hamburger menu
    * Make site responsive for mobile
* Fix registration flash message bug

## Google Maps (v2 updates)
In deployed v2 of this application we will be adding a location feature to our application, using the Google Maps API. The steps are as follows:
* Sign up for a google developer account
* Get Google Maps API key
    * Restrict Google Maps API key
* Enable Gecoding API
* Get another key for Geocoding API
    * Add to application as ENV variable
* Add Google Maps scripts to your application
* Display the campground location in show.ejs
* Update campground model
* Update new and edit forms
    * Add location input field
* Update campground routes (we do this by using the geocoder package: npm i -S node-geocoder)

## Moment JS (v3 updates)
In deployed v3 of this application we will be adding a "time since..." feature to our application, using Moment JS. The steps are as follows:
* Install Moment JS
* Require Moment and add it to app.locals
* Update campground and comment models
* Use moment in the show.ejs file

## Admin User Role Authorization (v4 updates)
In deployed v4 of this application we will be adding admin user functionality to our website. The steps are as follows:
* Modify user model to include isAdmin object
* Add admin code input to register.ejs
* Modify index.js router.post() route to include admin check logic
* Add logic inside of the campgrounds show.ejs to give admin rights to edit/delete posts
* Additionally, modify middleware index.js ownership to include admin rights to edit/delete posts

## User Profiles (v5 updates)
In deployed v5 of this application we will be adding user profiles. The steps are as follows:
* Update user model to include first name, last name, avatar, and email
* Update register.ejs to reflect changes in user model
* Add new instance of User() to index.js inside of the router.post() route for register
* Add user profile route to index.js
* Create a new view for user profiles at views/users/show.ejs
* Modify user profile route in index.js to route post information to views/users/show.ejs

## Edit User Profiles and UI Updates (v6 updates)
In deployed v6 of this application we will be adding a view profile feature on the nav-bar as well as editing user profile and UI improvements. The steps are as follows:
* Add associated user campgrounds to views/users/show.ejs
* Add a dropdown feature to the "Signed in as..." tab
* In the dropdown menu we will include a user profile link and an edit user profile link
* Additionally, we will add an edit button to view/users/show.ejs which will only appear if the user owns the profile
* Create a user.js file for routing purposes
* Modify app.js to include user.js routes
* Create edit.ejs under views/users/edit.ejs
* Add RESTful routes to user.

## Password Reset (v7 updates)
In deployed v7 of this application we will be adding a password reset option for users. The steps are as follows:
* Run *npm i -S async nodemailer* in the terminal (crypto is already part of express)
* Require async, nodemailer, and crypto into index.js route
* Create a GET and POST route for the forgot password page
* Ensure that a legitimate email and pass is passed into process.env.GMAILPW (export GMAILPW to .env) for the post route
* Create a view for the forgot password page
* Ensure that username and email is unique by updating the user model
* Add a reset password token as well as reset password time-to-expiration limit to the user model
* Create a GET and POST route for the reset password token page
* As before, ensure that a legitimate email and pass is passed into process.env.GMAILPW (export GMAILPW to .env) for the post route
* Create a view for the reset password token page
