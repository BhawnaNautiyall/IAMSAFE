// Function to show toast with the location coordinates
function showLocationToast(latitude, longitude) {
    const toast = document.getElementById("location-toast");
    toast.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
    toast.style.display = "block";
    
    // Hide the toast after 3 seconds
    setTimeout(() => {
        toast.style.display = "none";
    }, 3000);
}

// Check if geolocation is available
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        // Success callback: We got the location
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        // Show location every 10 seconds
        setInterval(() => {
            showLocationToast(latitude, longitude);
        }, 10000);  // Show every 10 seconds
    }, function(error) {
        // Error callback: Handle errors in fetching location
        alert("Error getting location: " + error.message);
    });
} else {
    alert("Geolocation is not supported by this browser.");
}
