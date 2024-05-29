<script>
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/subscribersDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Subscriber Schema
const subscriberSchema = new mongoose.Schema({
    email: String
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

// POST route to handle form submission
app.post('/subscribe', (req, res) => {
    const newSubscriber = new Subscriber({
        email: req.body.email
    });

    newSubscriber.save((err) => {
        if (!err) {
            res.send('Successfully subscribed!');
        } else {
            res.send('There was an error subscribing.');
        }
    });
});

// Function to send email updates
async function sendUpdates() {
    const updates = await getLatestUpdates();
    Subscriber.find({}, (err, subscribers) => {
        if (!err && subscribers.length > 0) {
            let emailList = subscribers.map(subscriber => subscriber.email);

            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'your-email@gmail.com',
                    pass: 'your-email-password'
                }
            });

            const templatePath = path.join(__dirname, 'emailTemplate.ejs');
            ejs.renderFile(templatePath, { updates: updates }, (err, data) => {
                if (err) {
                    console.log('Error rendering email template: ' + err);
                } else {
                    let mailOptions = {
                        from: 'your-email@gmail.com',
                        to: emailList,
                        subject: 'Website Updates',
                        html: data
                    };

                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            console.log('Error sending email: ' + error);
                        } else {
                            console.log('Email sent: ' + info.response);
                        }
                    });
                }
            });
        }
    });
}

// Placeholder function for fetching the latest updates
async function getLatestUpdates() {
    return [
        { title: 'Update 1', content: 'Content for update 1' },
        { title: 'Update 2', content: 'Content for update 2' },
        { title: 'Update 3', content: 'Content for update 3' }
    ];
}

// Serve the subscription form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Example route to manually trigger email sending
app.get('/send-updates', (req, res) => {
    sendUpdates();
    res.send('Updates sent');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
  </script>
