// Check login status on page load
document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("isLoggedIn") !== "true") {
      alert("You need to log in first!");
      window.location.href = "index.html"; // Redirect to login page
    }

    // Prevent navigation with the back button
    history.pushState(null, "", location.href);
    window.onpopstate = () => {
      history.pushState(null, "", location.href);
      alert("Navigation using the back button is disabled. Please use Logout.");
    };

    // Logout functionality
    document.getElementById("logout-btn").addEventListener("click", () => {
      sessionStorage.removeItem("isLoggedIn"); // Clear login status
      alert("You have logged out successfully.");
      window.location.href = "index.html"; // Redirect to login page
    });
  });