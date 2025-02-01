import axios from "axios";

const api = axios.create({
  baseURL: "https://www.pinjun.xyz/api",
  withCredentials: true,
});

export default api;
