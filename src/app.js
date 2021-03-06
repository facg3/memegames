const express = require('express');
const path = require('path');
// const helpers = require('./views/helpers');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const controllers = require('./controllers');

const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',

  })
);

app.use(controllers);
app.set('port', process.env.PORT || 3000);

module.exports = app;
