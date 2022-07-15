import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: { Authorization: 'Client-ID 7nSj-N4q880WrEuORAhg6ENtidhj02yanDDythWmZlc' },
});