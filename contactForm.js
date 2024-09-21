document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Validate form fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if (name && email && subject && message) {
        // If all fields are filled, show thank you message
        alert('Thank you for your message!');
        // Optionally, you can reset the form here
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all required fields.');
    }
});