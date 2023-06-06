import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/";
const headers = { "Content-Type": "application/json" };

export const axiosInstance = axios.create({
  baseURL: URL,
  headers,
});
