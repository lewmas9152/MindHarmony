const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const routes = require('./Routes/api');

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.all('/', (req, res) => {
    res.json({'Error': 'Working Endpoint is /api/chat'})
})

app.all('/api', (req, res) => {
    res.json({'Error': 'Working Endpoint is /chat'})
})

app.use('/api', routes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/api/');
});
