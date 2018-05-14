validateForm = function() {
    return checkName();
}

// These are the guidelines for usernames in AirCamp
function checkName() {

    var username = document.getElementById("username");
    var errMsgHolder = document.getElementById("nameErrMsg");

    // Usernames must be no less than two characters and no more than 16 characters long
    if (username.length < 2 && username.length > 16) {
        errMsgHolder.innerHTML =
            "Usernames must be between  and 16 characters!";
        return false;
    } else if (!(/^\S{3,}$/.test(username))) {
        // Usernames cannot contain spaces
        errMsgHolder.innerHTML =
            "Usernames cannot contain whitespace!";
        return false;
    } else {
        // Return nothing
        errMsgHolder.innerHTML = '';
        return undefined;
    }
}
