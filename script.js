document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Dummy authentication logic for demonstration
    if (email === "test@example.com" && password === "password123") {
        alert("Login successful!");
        window.location.href = "index.html";  // Redirect to a new page after successful login
    } else {
        alert("Invalid email or password. Please try again.");
    }
};
