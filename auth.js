// Users data (to simulate a real backend)
const users = [
    { email: "test@example.com", password: "password123" },
    { email: "admin@domain.com", password: "adminpass" },
    { email: "user@domain.com", password: "userpass" }
];

// Login form event listener
document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const loading = document.getElementById("loading");

    // Reset errors
    emailError.textContent = "";
    passwordError.textContent = "";

    // Simple email validation
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

    // Simulate backend login (fake authentication)
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        // Show loading animation (simulated login process)
        loading.style.display = "block";

        // Redirect after short delay to simulate processing
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);
    } else {
        passwordError.textContent = "Invalid email or password.";
    }
};

// Show/Hide password functionality
document.getElementById("togglePassword").onclick = function() {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        this.textContent = "Show";
    }
};

// Forgot password alert (temporary)
document.getElementById("forgotPassword").onclick = function() {
    alert("Password recovery options coming soon!");
};
