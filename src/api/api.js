import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c51b4302-d731-4573-84c6-29789af5184e'
    }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    followOnUser(id){
        return instance.post(`follow/${id}`).then(response => response.data)
    },

    unfollowOnUser(id){
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}


export const authAPI = {
    me(){
        return instance.get('auth/me').then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`).then(response => response.data)
    }
}