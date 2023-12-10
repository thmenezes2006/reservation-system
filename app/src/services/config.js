import axios from 'axios'

const api = `${process.env.VUE_APP_IP_API}` + `:${process.env.VUE_APP_PORT_REST}`
export const http = axios.create({
    baseURL: api
})