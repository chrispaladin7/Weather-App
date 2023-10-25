import sendRequest from "./send-request";
const BASE_URL = '/api/searches';

export async function fetchWeather(city) {
  return sendRequest(`${BASE_URL}/${city}`);
}

