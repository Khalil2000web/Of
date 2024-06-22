<?php
$plain_password = 'carter'; // Replace with your actual password
$hashed_password = password_hash($plain_password, PASSWORD_BCRYPT);
echo $hashed_password;
?>