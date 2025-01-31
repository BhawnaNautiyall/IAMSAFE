// Set the splash screen to hide after 2 seconds and redirect to login.html
setTimeout(function () {
    document.getElementById('splash-screen').style.display = 'none';  // Hide splash screen
    window.location.href = "login.html";  // Redirect to login page
}, 2000);  // 2000ms = 2 seconds
