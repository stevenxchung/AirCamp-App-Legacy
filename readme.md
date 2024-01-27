# Legacy AirCamp Application (v10 updates)

Archive repository for the legacy AirCamp web application. For a more modern version of AirCamp on the latest framework and deployment, see the [aircamp repository](https://github.com/stevenxchung/aircamp). 

**Legacy notes**: migrated to this repository due to the increased volume of files in the [bootcamp repository](https://github.com/stevenxchung/Web-Developer-Bootcamp). This AirCamp (previously YelpCamp) application deployment series will be based on [YelpCamp v12 (deployed)](https://github.com/stevenxchung/Web-Developer-Bootcamp/tree/master/Section%2038%20-%20Deploying/v12Deployed). For more details and documentation please visit the linked YelpCamp v12 (deployed) repository mentioned previously. General updates from each iteration of AirCamp will be appended to this document. This website uses Heroku and mLab cloud database for hosting.

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
* Add RESTful routes to user.js

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

## Register Page Clean-up, Forgot Password Link, and Change Password Page (v8 updates)
* Fix error messages on register when email is empty and when email exists (custom messages in index.js route)
* Update redirect for edit campgrounds page to redirect to campground show page
* Remove admin entry form from register page (more secure, admin rights will be granted via mlab)
* Add labels to register and login page for clarity and form separation (best practices)
* Remove first name, last name, avatar, and bio from the sign-up page since users can populate during edits
* Set default first name, last name, avatar, and bio when a new user is created (modify index.js route)
* Modify campground ownership header on the user's profile page to display name and username
* Add a link to the forgot password page on the login page (also needs styling)
* Add new routes and a view for the change password page which can be accessed via navbar dropdown menu

## Campground Show Page/Comments Improvements (v9 updates)
In deployed v9  of this application we will be cleaning up the comments section in the campground show page to allow users to post, edit, or delete comments without painfully clicking on another page an waiting for it to render. We will also add functionality to the left navigation menu. The steps are as follows:
* Format name and add icons, links and active ui tabs to the left navigation menu in the views/campgrounds/show.ejs
* Set up the add new comment button that is used for collapsing posts in the views/campgrounds/show.ejs file
* Create a form with method="POST" for users to submit a comment (edit is PUT)
* Include isLoggedIn() type check logic to secure the comments section
* Run add autosize CDN to use autosize() on comment text area (also add CDN to footer)
* Adjust footer script to include autosize for new posts and edits (for some reason, scripts do not run when referenced locally for this project)
* Add logic to check if there are comments
* Add reverse() to the forEach() loop to display comments (newest-oldest) through looping
* Add user avatar (logged in) and logic to change icon display color
* Style UI to create separation between elements in the comments section
* Eliminated unnecessary spacing on the comment elements
* Added show more/show less on comments page by adding script and CDN in footer (for some reason, scripts do not run when referenced locally for this project)

## Contact Page Views, Comment Section Debugging, Campground Create/Edit UI, Passport Redirect, AirCamp Theme (v10 updates)
In deployed v10, we will debug the word overflow issue as well as the container structure to make sure nothing breaks. Additionally, the Campground Create/Edit UI will be improved (description box). The contact page to allow users to contact the campground owner. Passport will now redirect to the last page that was requested after user logs on. There will also be improvements to the entire theme as well. The steps are as follows:
* Fix comment overflow issue by implementing overflow in CSS for .user-comment-space
* Add autosize for create/edit campgrounds in the footer.ejs file
* Update UI in campground/show.ejs page such that the page is less buggy when resizing
* Removed change username capability in users/edit.ejs
* Added userRedirect middleware to redirect users to last requested page
* Run *npm install socket.io --save*
* Add route and view to contact chat room
* Create vanilla JS script as well as socket interactions between the client (message.js) and server (app.js)
* Changed navbar dropdown menu position to auto (fixing logging out issue on mobile)
* Improve UI for AirCamp Chat (separate CSS) which will include an online users list as well as a chat window
