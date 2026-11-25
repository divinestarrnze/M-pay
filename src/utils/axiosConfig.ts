// We use this to connect the backend to the frontend using the endpoint from render to fetch.

import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "https://m-pay-1.onrender.com"
});

export default axiosInstance;