var express = require("express"),
    router = express.Router(),
    passport = require("passport"),
    User = require("../models/user");

// Render landing page as our root "/" page
router.get("/", function(req, res) {
    res.render("landing");
});

// ======================
// AUTHENTICATION ROUTES
// ======================

// Register form
router.get("/register", function(req, res) {
    res.render("register", {page: "register"});
});

// Sign up logic
router.post("/register", function(req, res) {
    var newUser = new User({username: req.body.username});
    if (req.body.adminCode === process.env.admin_KEY) {
        newUser.isAdmin = true;
    }
    User.register(newUser, req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            return res.render("register", {error: err.message});
        }
            passport.authenticate("local")(req, res, function() {
            if (newUser.isAdmin) {
                req.flash("success", "Welcome to AirCamp " + user.username + " Administrative rights granted");
            }
            req.flash("success", "Welcome to AirCamp " + user.username);
            res.redirect("/campgrounds");
        });
    });
});

// Login form
router.get("/login", function(req, res) {
    res.render("login", {page: "login"});
});

// Login logic
// Includes passport.authenticate() middleware
router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login",
        successFlash: "Welcome back to AirCamp!",
        failureFlash: "Error, invalid username or password!"
    }), function(req, res) {
});

// Logout route
router.get("/logout", function(req, res) {
    req.logout();
    req.flash("success", "Logged you out!")
    res.redirect("/campgrounds");
});

module.exports = router;
