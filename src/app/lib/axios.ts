import axios from "axios";

// Axios 기본 설정
axios.defaults.withCredentials = true;

// Axios 인스턴스=
const axiosInstance = axios.create({
  baseURL: "https://back.rgt-subject.kro.kr",
  withCredentials: true,
});

export default axiosInstance;
