const express = require('express');
const path = require('path');


const app = express();

app.use(express.static(`${__dirname}/dist/`));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './dist/index.html'));
});


const PORT = process.env.PORT || 5000;

const { log } = console;
app.listen(PORT, () => {
  log('Server started on port: ', PORT);
});
