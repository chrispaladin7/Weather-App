
module.exports = { 
    search 
};

async function search(req, res) {
  const city = req.params.city;
  try {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.WEATHER_API_KEY}`;
    
    const data = await fetch(API_URL).then((res)=>res.json());
    console.log(data);
    res.json(data);
    
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
}

