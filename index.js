const express = require('express');
const menu = require('./my-pizza/src/menu.js');
const app = express();
const PORT = 5000; 

/*app.get('/', (req, res) => {
    res.send('Hello');
});*/

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/api/my-pizza/menu', (req, res) => res.json(menu));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));