# Deployed YelpCamp Application v3

The deployed YelpCamp application has migrated to another repository due to the increased volume of files in the [bootcamp repository](https://github.com/stevenxchung/Web-Developer-Bootcamp).
This YelpCamp application deployment series will be based on [YelpCamp v12 (deployed)](https://github.com/stevenxchung/Web-Developer-Bootcamp/tree/master/Section%2038%20-%20Deploying/v12Deployed).
For more details and documentation please visit the linked YelpCamp v12 (deployed) repository mentioned previously. This website uses Heroku and mLab cloud database for hosting, you can see the latest stable build of the YelpCamp application [here](https://powerful-meadow-57101.herokuapp.com/).

## UI Improvements (v1 updates)
In deployed v1 of this application we will be implementing the following improvements:
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
