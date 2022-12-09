const axios = require('axios');
const { API_KEY } = process.env;

exports.handler = async function (event) {
  const options = JSON.parse(event.body);
  const { title } = options;
  const url = `https://www.omdbapi.com?apikey=${API_KEY}&s=${title}&page=3`;
  const { data } = await axios.get(url);

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
