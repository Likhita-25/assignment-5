// Predefined user data
const predefinedUsers = [
  { email: '221fa04168', password: 'Deepika@666' },
  { email: '221fa04193', password: 'Shawana@786' },
  { email: '221fa04187', password: 'Likhita@187' },
  { email: '221fa04198', password: 'Jyoshika@198' },
  { email: '221fa04162', password: 'Vidya@162' },
  { email: '221fa04176', password: 'Akshitha@176' }
];

// Function to show the login content in the container
function loadLogin() {
  document.querySelector('.content').innerHTML = `
    <div class="wrapper">
      <h1>Login</h1>
      <form id="loginForm">
        <div class="input">
          <label for="username">Username:</label>
          <div>
            <i class="fas fa-user"></i>
            <input type="text" id="username" name="username" placeholder="Enter your username" required>
          </div>
        </div>
        <div class="input">
          <label for="password">Password:</label>
          <div>
            <i class="fas fa-lock"></i>
            <input type="password" id="password" name="password" placeholder="Enter your password" required>
          </div>
        </div>
        <div class="remember" style="margin-top: 20px;">
            <label>
              <input type="checkbox" style="margin-right: 10px;"> Remember me
            </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
      </form>
      <div class="register">
        <p>Don't have an account? </p>
        <label>
        <a href="register.html">Sign Up</a>
        </label>
      </div>
    </div>
  `;

  // Add event listener for form submission
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting in the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the entered username and password match any of the predefined users
    const user = predefinedUsers.find(user => user.email === username && user.password === password);

    if (user) {
      // Redirect to the home page if credentials are valid
      window.location.href = "home.html";
    } else {
      // Show an error message if credentials are invalid
      alert("Invalid username or password.");
    }
  });
}

// Call loadLogin when the "Login" button is clicked
function showLoginSection() {
  loadLogin();
  document.getElementById('content-section').style.display = 'block'; // Show container
}