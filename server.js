const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));  // Ensure static files load correctly

app.get('/', (req, res) => {
    res.render('index');  // This must match index.ejs
});

app.listen(process.env.PORT || 3000, () => console.log('Server running'));
