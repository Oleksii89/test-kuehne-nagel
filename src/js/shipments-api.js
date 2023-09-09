import axios from 'axios';
const API_KEY = '5e0b62d0';

const BASE_URL = 'https://my.api.mockaroo.com/shipments.json';

async function fetchShipments() {
  const response = await axios.get(`${BASE_URL}?key=${API_KEY}`);
  console.log(response.data);
  return response.data;
}

export { fetchShipments };
