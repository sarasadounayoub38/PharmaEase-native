// Function to register a new user
function signUp() {
    var name = document.getElementById("userName").value;
    var email = document.getElementById("userEmail").value;
    var pass = document.getElementById("userPass").value;

    if (name == "" || email == "" || pass == "") {
        alert("Please fill in all fields");
        return;
    }

    var users = JSON.parse(localStorage.getItem("allUsers")) || [];

    // Check if email already exists
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            alert("This email is already registered!");
            return;
        }
    }

    var newUser = {
        name: name,
        email: email,
        password: pass
    };

    users.push(newUser);
    localStorage.setItem("allUsers", JSON.stringify(users));

    alert("Account created successfully! You can now login.");
    window.location.href = "login.html";
}

// Function to handle login
function login() {
    var email = document.getElementById("loginEmail").value;
    var pass = document.getElementById("loginPass").value;

    var users = JSON.parse(localStorage.getItem("allUsers")) || [];
    var found = false;

    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === pass) {
            found = true;
            localStorage.setItem("currentUser", JSON.stringify(users[i]));
            break;
        }
    }

    if (found) {
        alert("Welcome back! Login successful.");
        window.location.href = "Home.html";
    } else {
        alert("Invalid email or password!");
    }
}