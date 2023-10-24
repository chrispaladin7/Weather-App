const { fetchWeather } = require('../../src/utilities/weather-api'); // Import the API function

module.exports = { 
    search 
};

async function search(req, res) {
  const city = req.params.city;
  try {
    const data = await fetchWeather(city);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
}

