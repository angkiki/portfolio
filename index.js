const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.send('index.html');
})

app.get('*', (request, response) => {
  response.status(404).send('Not Found');
});

const server = app.listen(PORT, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));
