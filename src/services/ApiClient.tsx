import axios from "axios";

const apiClient = axios.create({
  baseURL:
    process.env.REACT_APP_API_BASE_URL || "http://localhost:8080", // 배포 환경용 URL
  withCredentials: true, // 쿠키 전송 허용
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
