const express = require('express')
const app = express()
const Calculadora = require('./models/Calculadora');
var port = process.env.PORT || 8080;


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  var a = 1;
  var b = 2;
  var resultado = new Calculadora().soma(a,b);
  res.send(`Se eu somar ${a} + ${b}, o resultado é ${resultado}`);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
