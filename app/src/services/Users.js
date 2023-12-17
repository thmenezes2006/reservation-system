import { http } from './config'

export default {
    getAll: async () => {
        const users = await http.get('/users')
        return users
    },
    getWhere: async (obj) => {
        const key = Object.keys(obj)[0];
        const value = obj[key];
        console.log('http', http);
        const users = await http.get(`/users/${key}/${value}`)
        console.log('users', users);
        return users
    },
    create: async (obj) => {
        const user = await http.post(`/users`, obj)
        return user
    },
    findAvailableConsultant: async (obj) => {
        const users = await http.get(`/users/findAvailableConsultant/${obj.dateAndHourStart}/${obj.dateAndHourFinish}`)
        return users
    }
}