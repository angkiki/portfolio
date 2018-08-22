const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.send('index.html');
})

app.get('*', (request, response) => {
  response.status(404).send('Not Found');
});

app.listen(3000);
