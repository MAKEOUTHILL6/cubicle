const express = require('express');
const routes = require('./routes');
const { initializeDatabase } = require('./config/database');
const cookieParser = require('cookie-parser');
const app = express();
const port = 5000;
const {auth} = require('./middlewares/authMiddleware');

// TEMPLATE ENGINE
require('./config/handlebars')(app);

// STATIC FILES
app.use('/static', express.static('public'));

// MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(auth);
app.use(routes);

initializeDatabase()
    .then(() => {
        app.listen(port, () => {
            console.log('Server is listening on port 5000');
        });
    })
    .catch(err => console.log(err))