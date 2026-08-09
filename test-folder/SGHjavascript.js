// Select the form element from the DOM
        const form = document.getElementById('myForm');
        const messageDisplay = document.getElementById('message');

        // Listen for the "submit" event on the form
        form.addEventListener('submit', function(event) {
            // Stop the browser from reloading the page
            event.preventDefault();

            // Extract the value from the input field
            const nameValue = document.getElementById('username').value;

            // Process the data (Displaying it dynamically on the screen)
            messageDisplay.textContent = `Hello, ${nameValue}! Form submitted successfully.`;

            // Optional: Reset the input field after submission
            form.reset();
        });