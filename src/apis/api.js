import axios from "axios";
import { API_URL } from "../configs";

const axiosClient = axios.create({
  baseURL: `${API_URL}/api/v1`,
  responseType: "json",
  timeout: 60 * 1000,
});

export default axiosClient;
