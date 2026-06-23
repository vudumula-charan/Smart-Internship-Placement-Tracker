import axios from "axios";

const API = axios.create({
  baseURL: "https://smart-internship-placement-tracker-1.onrender.com/api"
});

export default API;