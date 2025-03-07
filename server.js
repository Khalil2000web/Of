const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');  // Enables EJS
app.set('views', path.join(__dirname, 'views'));  // Ensures correct path

// Serve static files (CSS, JS, Images)
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index');  // This must match your EJS filename (without .ejs)
});

app.listen(process.env.PORT || 3000, () => console.log('Server running'));
