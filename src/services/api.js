import axios from "axios";


const api = axios.create({
     baseURL: "https://viacep.com.br/ws/79012652/json/"
});

export default api;

