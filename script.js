// script.js
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form data
        const formData = new FormData(event.target);

        // Submit form data using fetch or AJAX
        fetch('/', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            // Handle response data or update the page as needed
            console.log('Form submitted');
            
           
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
