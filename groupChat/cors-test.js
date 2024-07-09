let axios = require('axios');

axios.get('http://localhost:3000/', {
    headers: {
        'Authorization': 'Bearer token',
    }
}).then((res) => {
    console.log(res.data);
}).catch((error) => {
    console.error(error);
});