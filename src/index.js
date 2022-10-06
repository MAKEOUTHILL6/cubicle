const express = require('express');
const routes = require('./routes');
const { initializeDatabase } = require('./config/database');
const app = express();
const port = 5000;

// TEMPLATE ENGINE
require('./config/handlebars')(app);

// STATIC FILES
app.use('/static', express.static('public'));

// MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(routes);


initializeDatabase()
    .then(() => {
        app.listen(port, () => {
            console.log('Server is listening on port 5000');
        });
    })
    .catch(err => console.log(err))