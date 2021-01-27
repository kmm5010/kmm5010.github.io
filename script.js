// Back-to-top button usage
// get access to the button
back_to_top = document.querySelector('#back-to-top');

// scroll to the top when user clicks back-to-top button
function topFunction() {
    document.body.scrollTop = 0; // for Safari
    document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE, and Opera
}

// Validate form completion
function validateForm() {
    first_name = document.forms["contact_me"]["first-name"].value;

    if (first_name == "") {
        alert("Please enter your first name.");
        return false;
    }
    last_name = document.forms["contact_me"]["last-name"].value;

    if (last_name == "") {
        alert("Please enter your last name.");
        return false;
    }
    email = document.forms["contact_me"]["email"].value;

    if (email == "") {
        alert("Please enter your email.");
        return false;
    }
}
