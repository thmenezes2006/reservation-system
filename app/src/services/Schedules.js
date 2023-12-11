import { http } from './config'

export default {
    getAll: async () => {
        const schedules = await http.get('/schedules')
        return schedules
    },
    getWhere: async (obj) => {
        const key = Object.keys(obj)[0];
        const value = obj[key];
        const schedules = await http.get(`/schedules/${key}/${value}`)
        return schedules
    },
    create: async (obj) => {
        const schedule = await http.post(`/schedules`, obj)
        return schedule
    }
}