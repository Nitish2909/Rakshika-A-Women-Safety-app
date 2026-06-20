import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api', // Adjust the base URL as needed
  headers: {
    'Content-Type': 'application/json',
    credentials: 'include', // Include credentials for cross-origin requests
  },
});

export default axiosInstance;
