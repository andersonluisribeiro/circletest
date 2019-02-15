const express = require('express')
const app = express()
const port = 80


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))