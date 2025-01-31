function flipImage(container) {
  container.classList.toggle('flipped');
}
// The correct password
const correctPassword = "FORTELESPECIALE";

// Function to check if the entered password is correct
function checkPassword() {
  const enteredPassword = document.getElementById("passwordInput").value;

  if (enteredPassword === correctPassword) {
    // If the password is correct, close the dialog
    document.getElementById("passwordDialog").style.display = "none";
  } else {
    // If the password is incorrect, show an alert and keep the dialog open
    alert("Incorrect password. Please try again.");
  }
}

// Show the password dialog on page load
window.onload = function () {
  document.getElementById("passwordDialog").style.display = "flex";
};
