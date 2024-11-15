document.getElementById("registrationForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  // Regular Expressions for validation
  const nameRegex = /^[A-Za-z]{2,}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  // Getting input values
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Function for displaying toast notifications
  function showToast(message) {
    Toastify({
      text: message,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      style: {
        background: "#2b2738",
        border: "1px solid black",
        color: "white",
        widht: 100,
      },
      stopOnFocus: true,
    }).showToast();
  }

  // Validation
  if (!nameRegex.test(firstName)) {
    showToast("First Name is invalid");
    return;
  }

  if (!nameRegex.test(lastName)) {
    showToast("Last Name is invalid");
    return;
  }

  if (!emailRegex.test(email)) {
    showToast("Email is invalid");
    return;
  }

  if (!passwordRegex.test(password)) {
    showToast("Password is invalid");
    return;
  }

  // If all validations pass
  window.location.href = "https://www.youtube.com/";
});

// Select the dark and light mode buttons
const darkModeButton = document.querySelector('.dark-mode-btn');
const lightModeButton = document.querySelector('.light-mode-btn');

// Function to enable dark mode
function enableDarkMode() {
  document.body.classList.add('dark-mode'); // Apply dark mode class
}

// Function to enable light mode
function enableLightMode() {
  document.body.classList.remove('dark-mode'); // Remove dark mode class
}

// Event listeners for the buttons
darkModeButton.addEventListener('click', enableDarkMode);
lightModeButton.addEventListener('click', enableLightMode);




