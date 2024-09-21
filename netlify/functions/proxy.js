const axios = require('axios');

exports.handler = async function (event) {
  const { topic, page, search } = event.queryStringParameters;

  const apiUrl = `http://skunkworks.ignitesol.com:8000/books?topic=${topic}&search=${search}&mime_type=image&page=${page}`;

  try {
    const response = await axios.get(apiUrl);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error fetching data' }),
    };
  }
};
