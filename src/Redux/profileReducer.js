import { profileAPI } from './../api/api';

const UPDATE_PROFILE_STATUS = 'EDIT_PROFILE_STATUS'
const SET_CURRENT_PROFILE = 'SET-CURRENT-PROFILE'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const SET_OWNER_PROFILE = 'SET_OWNER_PROFILE'

let initialState = {
    profile: null,
    isMyProfile: false,
    isFetching: false,
    profileStatus: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_CURRENT_PROFILE:
            return {
                ...state, profile: action.currentProfile
            }

        case TOGGLE_IS_FETCHING:
            
            return {
                ...state, isFetching: action.isFetching
            }

        case UPDATE_PROFILE_STATUS:
            return {
                ...state, profileStatus: action.status
            }

        case SET_OWNER_PROFILE:

            return {
                ...state, isMyProfile: action.isMyProfile
            }

        default: return state
    }
}

export const setCurrentProfile = (currentProfile) => ({ type: SET_CURRENT_PROFILE, currentProfile })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const updateProfileStatus = (status) => ({ type: UPDATE_PROFILE_STATUS, status })
export const setOwnerProfile = (isMyProfile) => ({ type: SET_OWNER_PROFILE, isMyProfile })

export const getProfile = (userId) => {
    
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        profileAPI.getProfile(userId).then(data => {
            dispatch(setCurrentProfile(data))
            dispatch(toggleIsFetching(false))
        })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(updateProfileStatus(data))
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.setStatus(status).then(response => {
            if (response.data.resultCode === 0)
                dispatch(updateProfileStatus(status))
            else {
                alert('Error request')
            }
        })
    }
}

export default profileReducer