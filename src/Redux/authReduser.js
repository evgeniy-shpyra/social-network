import { authAPI, profileAPI } from './../api/api';

const SET_USER_DATA = 'SET_USER_DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_USER_AVATAR = 'SET_USER_AVATAR'

let initialState = {
    userId: null,
    email: null,
    login: null,
    urlAvatar: null,
    toggleIsFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                toggleIsFetching: action.isFetching
            }
        case SET_USER_AVATAR:
            return {
                ...state,
                urlAvatar: action.urlAvatar
            }
        default: return state
    }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setUserAvatar = (urlAvatar) => ({ type: SET_USER_AVATAR, urlAvatar })


export const getAuthUserData = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data
                dispatch(setAuthUserData(id, email, login))

                profileAPI.getProfile(id).then(data => {
                    dispatch(setUserAvatar(data.photos.large))
                })
            }
            dispatch(toggleIsFetching(false))
        })
    }
}


export default authReducer