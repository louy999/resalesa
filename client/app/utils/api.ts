import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:5000/api",
  // baseURL: "http://18.205.244.53:5000/api",
});

export default axiosClient;
