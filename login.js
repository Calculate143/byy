const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const sign_up_btn_2 = document.querySelector("#sign-up-btn-2");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

sign_up_btn_2.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".sign-in-form");

  // Function to validate credentials
  loginForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent default form submission

      const username = loginForm.querySelector('input[type="text"]').value.trim();
      const password = loginForm.querySelector('input[type="password"]').value.trim();

      if (username === "admin" && password === "admin") {
          // Store login status in sessionStorage
          sessionStorage.setItem("isLoggedIn", "true");

          // Redirect to the target page
          window.location.href = "home.html";
      } else {
          alert("Invalid username or password!");
      }
  });

  // Check if the user is not logged in
  if (sessionStorage.getItem("isLoggedIn") !== "true" && window.location.pathname.includes("home.html")) {
      alert("You need to log in first!");
      window.location.href = "index.html"; // Redirect to login page
  }
});
