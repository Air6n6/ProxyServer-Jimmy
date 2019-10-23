const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.use('/air6n6/*/listing', express.static(path.join(__dirname, '../public')));

// app.get('/now', (req, res) => {
//   res.redirect('localhost:3010/now');
// });

app.listen(port, () => {
  console.log(`App listening at ${port}`);
});

