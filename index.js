const express = require('express')
const app = express()
var port = process.env.PORT || 8080;


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world ADS');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
