function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Check if the provided credentials are valid
    if (username === "admin" && password === "password") {
      alert("Login successful!");
      // Perform further actions (e.g., redirect to another page)
    } else {
      alert("Invalid username or password. Login failed.");
    }
  }
  
  function forgotPassword() {
    var username = prompt("Enter your username:");
  
    // Perform further actions (e.g., send password reset email to the user)
    if (username) {
      alert("Password reset email sent to " + username);
    }
  }
  