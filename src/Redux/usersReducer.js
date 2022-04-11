import { userAPI } from './../api/api';

const CHANGE_FOLLOWED = 'CHANGE-FOLLOWED'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const FOLLOWING_SUCCESS = 'FOLLOWING_SUCCESS'

const initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    IsFetching: false,
    followingInProcess: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case CHANGE_FOLLOWED:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return { ...u, followed: !u.followed }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, IsFetching: action.isFetching
            }
        case FOLLOWING_SUCCESS:

            return {
                ...state,
                followingInProcess: action.inProcess
                    ? [...state.followingInProcess, action.id]
                    : state.followingInProcess.filter(id => id != action.id)
            }

        default: return state
    }
}

export const changeFollowed = (userId) => ({ type: CHANGE_FOLLOWED, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const followingSuccess = (inProcess, id) => ({ type: FOLLOWING_SUCCESS, inProcess, id })


export const requestUsers = (page, pageSize) => {
    return (dispatch) => {

        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))

        userAPI.getUsers(page, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(toggleIsFetching(false))
        })
    }
}

export const followingProcess = (id, isFollowed) => {
    return (dispatch) => {
        dispatch(followingSuccess(true, id))
        if (isFollowed) {
            userAPI.unfollowOnUser(id).then(data => {
                if (data.resultCode === 0) {
                    dispatch(changeFollowed(id))
                }
                dispatch(followingSuccess(false, id))
            })
        }
        else {
            userAPI.followOnUser(id).then(data => {
                if (data.resultCode === 0) {
                    dispatch(changeFollowed(id))
                }
                dispatch(followingSuccess(false, id))
            })

        }
    }
}

export default usersReducer