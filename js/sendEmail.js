// This script will prevent the default form submission behavior, 
// collect the form data, and construct a mailto: link with the 
// form data as parameters.


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    // console.log("Got here")

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (!name ||!email ||!message) {
        console.error('Please fill in all fields.');
        return false;
    }

    var mailtoLink = "mailto:" + email + "?subject=Contact%20Form%20Submission%20From%20Your%20Website&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nMessage:\n" + message);
    window.location.href = mailtoLink;
});
