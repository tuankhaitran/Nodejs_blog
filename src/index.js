const express = require('express')
const app = express()
const path = require('path')
const morgan= require('morgan') 
const hbs  = require('express-handlebars');
const route = require('./routes/index.route');


//Middlewares
app.use(express.urlencoded({
  extended:true
}))
app.use(express.json())
app.use(express.static(path.join(__dirname,"public")));
app.use(morgan('combined'))
app.engine('hbs', hbs({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname,"resources/views"));


//routing
route(app);

 


app.listen(3000)
