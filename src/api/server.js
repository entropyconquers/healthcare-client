import axios from "axios";
const server = axios.create({
    baseURL: 'http://g2ddevs.me/api/',
    timeout: 5000,
});
export default server;