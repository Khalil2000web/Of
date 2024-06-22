<?php
session_start();

// Define the hashed password (you need to replace this with the actual hash of your password)
$hashed_password = '$2y$10$eImiTXuWVxfM37uY4JANjQeW7tMZBHT3A/gV1D1PjFb6hiWp8.Xia'; // Example bcrypt hash

// Get the password from the POST request
$password = $_POST['password'];

// Check the password against the hash
if (password_verify($password, $hashed_password)) {
    // Password is correct, set a session variable
    $_SESSION['authenticated'] = true;
    header('Location: protected_page.php');
    exit();
} else {
    // Password is incorrect, redirect back to the login form
    header('Location: login.html');
    exit();
}
?>