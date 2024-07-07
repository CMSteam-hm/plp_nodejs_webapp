const axios = require('axios');

const fetchData = async () => {
    try {
        const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchData();