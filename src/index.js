const express = require('express');
const handlebars = require('express-handlebars');
const { cubesMiddleware } = require('./middlewares');
const routes = require('./routes');

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

// MIDDLEWARES
app.use(cubesMiddleware);
app.use(routes);

app.listen(port, () => {
    console.log('Server is listening on port 5000');
});
