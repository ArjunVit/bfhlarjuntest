// script.js

document.getElementById('login').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        // Hide login form
        document.getElementById('login-form').style.display = 'none';

        // Show JSON input form
        document.getElementById('root').style.display = 'block';
    } else {
        // Display error message
        document.getElementById('login-error').textContent = 'Invalid username or password!';
    }
});

// document.getElementById('jsonInput').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const jsonText = document.getElementById('jsonText').value;

//     try {
//         const parsedJson = JSON.parse(jsonText);
//         // If parsing succeeds, you can do something with the JSON
//         alert('JSON submitted successfully!');
//         console.log(parsedJson); // For debugging

//         // Clear the textarea after successful submission
//         document.getElementById('jsonText').value = '';
//     } catch (error) {
//         // Display JSON parsing error
//         document.getElementById('json-error').textContent = 'Invalid JSON!';
//     }
// });
