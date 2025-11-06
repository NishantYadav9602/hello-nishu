const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome! This is Nishu CI/CD Demo</h1>');

});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

