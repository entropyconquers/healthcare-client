import axios from "axios";
const server = axios.create({
    baseURL: 'https://dms97ugoa3.execute-api.ap-south-1.amazonaws.com/api/',
    timeout: 5000,
});
export default server;