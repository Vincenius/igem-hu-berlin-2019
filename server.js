const express = require('express');

// Configure & Run the http server
const app = express();
app.use(express.static(__dirname))

app.listen(4007, () => {
  console.log('HTTP server running on port 4007');
});