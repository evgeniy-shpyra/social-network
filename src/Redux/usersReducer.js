const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'


const initialState = {
    users: [
        { id: 1, followed: false, fullName: 'Evgeniy S', status: 'I am a programer', location: { country: 'Ukraine', city: 'Kyiv' } },
        { id: 2, followed: true, fullName: 'Dima K', status: 'I am a men', location: { country: 'Ukraine', city: 'Kiev' } },
        { id: 3, followed: false, fullName: 'Artur S', status: 'I am a child', location: { country: 'Ukraine', city: 'Kherson' } }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return { ...u, followed: true }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return { ...u, followed: false }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, action.users]
            }
        default: return state
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer