import axios from "axios";

export const API = axios.create({
  baseURL: "https://dumblink-be.herokuapp.com/api/v1/",
});