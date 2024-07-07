const axios = require('axios');

axios.get('http://jsonplaceholder.typicode.com/posts')
 .then(response => {
    console.log(response.data);
 })
 .catch(error => {
    console.error('Error fetching data:', error);
 });