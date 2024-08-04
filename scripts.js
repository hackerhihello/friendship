// Debugging to ensure script is loaded
console.log("Script loaded");

function showWish() {
    console.log("showWish function called");
    document.getElementById('popup').style.display = 'block';

    // Set timeout to redirect after 5 seconds (for demonstration, originally requested 5 minutes)
    setTimeout(function() {
        console.log("Redirecting to link");
        window.location.href = 'https://youtube.com/shorts/ePjLGie443U?si=PnbZAR_JUtFlqngc';
    }, 5000); // 5000 milliseconds = 5 seconds
}

function closePopup() {
    console.log("closePopup function called");
    document.getElementById('popup').style.display = 'none';
}

// Ensure the script is correctly attaching the event listener
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
});
