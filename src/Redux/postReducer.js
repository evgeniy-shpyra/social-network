const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

let initialState = {
    posts: [
        { id: 1, author: "Evgeniy", body: "culpa, accusamus blanditiis, soluta obcaecati ab! Eaque voluptate id ullam?" },
        { id: 2, author: "Vasa", body: "culpa, accusamus blanditiis, soluta obcaecati e voluptate id ullam?" },
        { id: 3, author: "Dima", body: " soluta obcaecati ab! Eaque voluptate id ullam?" },
        { id: 4, author: "Evgeniy", body: "culpa, accusamus blanditiis, soluta obcaecati ab! Eaque voluptate id ullam?" },
        { id: 5, author: "Vasa", body: "culpa, accusamus blanditiis, soluta obcaecati e voluptate id ullam?" },
        { id: 6, author: "Dima", body: " soluta obcaecati ab! Eaque voluptate id ullam?" }
    ],
    newPostText: ""
}

const postReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, {
                    id: 7,
                    author: "Vasa",
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

export const updateNewPostAction = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text })
export const addPostAction = () => ({ type: ADD_POST })
export default postReducer
