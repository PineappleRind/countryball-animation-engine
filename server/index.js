
const express = require('express'), fs = require('fs')
// Create the express app
const app = express(), port = 8000

// Routes and middleware
// app.use(/* ... */)
// app.get(/* ... */)

// Start server
app.listen(port, function (err) {
  if (err) return console.error(err)
  console.log('Started at http://localhost:'+port)
})

// Serve every file in all directories outside of server/
app.use(express.static(__dirname + '/../'))