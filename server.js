const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
const emailFilePath = path.join(__dirname, 'emails.json');

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // serve static files

// Ensure emails file exists
if (!fs.existsSync(emailFilePath)) {
    fs.writeFileSync(emailFilePath, JSON.stringify([]));
}

// Endpoint to handle form submission
app.post('/subscribe', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send('Email is required');
    }

    const emails = JSON.parse(fs.readFileSync(emailFilePath, 'utf8'));
    emails.push(email);
    fs.writeFileSync(emailFilePath, JSON.stringify(emails));

    res.status(200).send('Subscription successful');
});

// Serve email.html with password protection
app.get('/emails', (req, res) => {
    const password = req.query.password;
    const correctPassword = 'your_secure_password'; // Change this to your desired password

    if (password === correctPassword) {
        res.sendFile(path.join(__dirname, 'public', 'email.html'));
    } else {
        res.status(401).send('Unauthorized');
    }
});

// Endpoint to get emails
app.get('/get-emails', (req, res) => {
    const emails = JSON.parse(fs.readFileSync(emailFilePath, 'utf8'));
    res.json(emails);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});