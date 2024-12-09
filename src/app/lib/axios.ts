import axios from "axios";

// Axios 기본 설정
axios.defaults.withCredentials = true;

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

export default axiosInstance;
