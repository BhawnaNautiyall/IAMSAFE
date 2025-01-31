// Signup Form Handling
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("signup-name").value.trim();
    let email = document.getElementById("signup-email").value.trim();
    let password = document.getElementById("signup-password").value.trim();
    let nameError = document.getElementById("signup-nameError");
    let emailError = document.getElementById("signup-emailError");
    let passwordError = document.getElementById("signup-passwordError");

    // Reset errors
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let valid = true;

    // Name Validation
    if (!name) {
        nameError.textContent = "Full Name is required!";
        valid = false;
    }

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
        alert("Signup successful!");
        document.getElementById("signupBox").style.display = "none";
        document.getElementById("loginBox").style.display = "block";
    }
});
