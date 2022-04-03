const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_POST = 'SET-POST'
const ADD_POST = 'ADD-POST'

let initialState = {
    posts: [
        { id: 1, author:'Evgeniy', body: "culpa, accusamus blanditiis, soluta obcaecati ab! Eaque voluptate id ullam?" },
        { id: 2, author:'Evgeniy', body: "culpa, accusamus blanditiis, soluta obcaecati e voluptate id ullam?" },
        { id: 3, author:'Evgeniy', body: " soluta obcaecati ab! Eaque voluptate id ullam?" },
        { id: 4, author:'Evgeniy', body: "culpa, accusamus blanditiis, soluta obcaecati ab! Eaque voluptate id ullam?" },
        { id: 5, author:'Evgeniy', body: "culpa, accusamus blanditiis, soluta obcaecati e voluptate id ullam?" },
        { id: 6, author:'Evgeniy', body: " soluta obcaecati ab! Eaque voluptate id ullam?" }
    ],
    newPostText: ''
}

const postReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_POST:
            return {
                ...state, posts: [...action.posts]
            }

        case ADD_POST:
            debugger
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {
                    id: 7,
                    body: state.newPostText
                }]
            }
        case UPDATE_NEW_POST_TEXT:

            return {
                ...state,
                newPostText: action.text
            }

        default: return state
    }
}

export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, text })
export const setPost = () => ({ type: SET_POST })
export const addPost = () => ({ type: ADD_POST })
export default postReducer
