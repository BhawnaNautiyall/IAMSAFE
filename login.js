// Login Form Handling
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let email = document.getElementById("login-email").value.trim();
    let password = document.getElementById("login-password").value.trim();
    let emailError = document.getElementById("login-emailError");
    let passwordError = document.getElementById("login-passwordError");

    // Reset errors
    emailError.textContent = "";
    passwordError.textContent = "";

    let valid = true;

    // Email Validation
    if (!email) {
        emailError.textContent = "Email is required!";
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = "Invalid email format!";
        valid = false;
    }

    // Password Validation
    if (!password) {
        passwordError.textContent = "Password is required!";
        valid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters!";
        valid = false;
    }

    // If valid, proceed
    if (valid) {
        // Redirect to location.html
        window.location.href = "location.html";  
    }
});
