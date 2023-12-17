import axios from 'axios'

let api = `${process.env.VUE_APP_IP_API}`
console.log('apiAntes', api);
if (process.env.VUE_APP_PORT_REST) {
    api = api + `:${process.env.VUE_APP_PORT_REST}`
}
console.log('apiDepois', api);
export const http = axios.create({
    baseURL: api
})