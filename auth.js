document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Reset errors
    emailError.textContent = "";
    passwordError.textContent = "";

    // Simple email validation (modify for more complexity)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Invalid email format.";
        return;
    }

    // Check password length
    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long.";
        return;
    }

    // Dummy authentication (replace with real backend logic)
    if (email === "test@example.com" && password === "password123") {
        // Redirect to index.html on success
        window.location.href = "index.html";
    } else {
        passwordError.textContent = "Invalid email or password.";
    }
};

// Optional: Forgot password alert
document.getElementById("forgotPassword").onclick = function() {
    alert("Password recovery options will be available soon!");
};
