const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('Hello World');
})

app.get('*', (request, response) => {
  response.status(404).send('Not Found');
});

app.listen(3000);
