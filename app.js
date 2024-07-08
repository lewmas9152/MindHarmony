const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./Routes/api');

const app = express();
app.use(bodyParser.json());


app.use('/api', routes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/api/');
});
