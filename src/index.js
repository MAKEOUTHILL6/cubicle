const express = require('express');
const handlebars = require('express-handlebars');


const app = express();
const port = 5000;


// TEMPLATE ENGINE
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

// STATIC FILES
app.use('/static', express.static('public'));


app.get('/', (req, res) => {
    res.render('index');
});


app.listen(port, () => {
    console.log('Server is listening on port 5000');
});
