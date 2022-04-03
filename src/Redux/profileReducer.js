import { authAPI, profileAPI } from './../api/api';

const EDIT_PROFILE_STATUS = 'EDIT_PROFILE_STATUS'
const SET_CURRENT_PROFILE = 'SET-CURRENT-PROFILE'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState = {
    profile: null,
    toggleIsFetching: false,
    profileStatus: 'Hello. My brother'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_CURRENT_PROFILE:
            return {
                ...state, profile: action.currentProfile
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state, toggleIsFetching: action.isFetching
            }

        case EDIT_PROFILE_STATUS:
            debugger
            return {
                ...state, profileStatus: action.status
            }

        default: return state
    }
}



export const setCurrentProfile = (currentProfile) => ({ type: SET_CURRENT_PROFILE, currentProfile })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const editProfileStatus = (status) => ({ type: EDIT_PROFILE_STATUS, status })

export const getProfile = (userId) => {
    return (dispatch) => {
        if (!userId) {
            authAPI.me().then(data => {

                profileAPI.getProfile(data.data.id).then(data => {

                    dispatch(setCurrentProfile(data))
                })
            })
        }
        else {
            profileAPI.getProfile(userId).then(data => {
                dispatch(setCurrentProfile(data))
            })
        }

    }
}

export default profileReducer