import axios from 'axios'

const apiUrl = process.env.VUE_APP_IP_API;
const restPort = process.env.VUE_APP_PORT_REST;


let api = apiUrl || '';

if (restPort) {
    api += `:${restPort}`;
}

export const http = axios.create({
    baseURL: api
})