import axios from "axios";

export const API = axios.create({
  baseURL: "https://dumblink-be.vercel.app/api/v1/",
});