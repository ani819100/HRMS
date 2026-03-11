import axios from "axios";

const API = axios.create({
    baseURL: "https://hrms-alik.onrender.com",
});

export default API;