const axios = require('axios');
const { API_KEY } = process.env;

exports.handler = async function (event) {
  console.log(event);
  const payload = JSON.parse(event.body);
  const { title } = payload;
  const { data } = await axios({
    url: `https://www.omdbapi.com?apikey=${API_KEY}&s=${title}&page=3`,
  });
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
