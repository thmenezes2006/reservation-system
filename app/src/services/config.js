import axios from 'axios'

let api = `${process.env.VUE_APP_IP_API}`

if (process.env.VUE_APP_PORT_REST) {
    api = api + `:${process.env.VUE_APP_PORT_REST}`
}

export const http = axios.create({
    baseURL: api
})