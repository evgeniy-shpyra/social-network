import { stopSubmit } from 'redux-form';
import { authAPI, profileAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_USER_AVATAR = 'SET_USER_AVATAR'
const TOGGLE_IS_AUTH = 'TOGGLE_IS_AUTH'

let initialState = {
    userId: null,
    email: null,
    login: null,
    IsFetching: false,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                IsFetching: action.isFetching
            }
        case SET_USER_AVATAR:
            return {
                ...state,
                urlAvatar: action.urlAvatar
            }

        case TOGGLE_IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            }
        default: return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setUserAvatar = (urlAvatar) => ({ type: SET_USER_AVATAR, urlAvatar })
export const toggleIsAuth = (isAuth) => ({ type: TOGGLE_IS_AUTH, isAuth })


export const getAuthUserData = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data
                dispatch(setAuthUserData(id, email, login, true))
                dispatch(toggleIsAuth(true))
                dispatch(toggleIsFetching(false))
            }
            else {
                dispatch(toggleIsFetching(false))
            }
        })
    }
}

export const submitLoginData = ({ email, password, rememberMe = false }) => {

    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        authAPI.submitLoginData(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
            else {
                dispatch(toggleIsFetching(false))
                if (data.fieldsErrors[0]) {
                    dispatch(stopSubmit('login', { email: "data.fieldsErrors[0].error" }))
                }
                else {
                    if (data.messages[0].length > 0)
                        dispatch(stopSubmit('login', { _error: data.messages[0] }))
                    else
                        dispatch(stopSubmit('login', { _error: 'Some error' }))
                }
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(toggleIsAuth(false))
                dispatch(setAuthUserData(null, null, null, false))
            }
            else {
                alert('ERROR authReducer logout')
            }
            dispatch(toggleIsFetching(false))
        })
    }
}

export default authReducer