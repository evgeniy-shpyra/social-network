import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '5b8eeb97-ca87-4590-960d-159689aa0245'
    }
})


export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    followOnUser(id) {   
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    unfollowOnUser(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}


export const authAPI = {
    submitLoginData(email, password, rememberMe) {
        return instance.post('auth/login', {email, password, rememberMe}).then(response => response.data)
    },

    logout(){
        return instance.delete('auth/login').then(response => response.data)
    },

    me() {
        return instance.get('auth/me').then(response => response.data)
    }
}


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    setStatus(status) {
        return instance.put('profile/status', { status: status })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    }
}