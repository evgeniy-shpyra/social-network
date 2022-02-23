const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

let initialState = {
    posts: [
        { id: 1, name: "Evgeniy", text: "culpa, accusamus blanditiis, soluta obcaecati ab! Eaque voluptate id ullam?" },
        { id: 2, name: "Vasa", text: "culpa, accusamus blanditiis, soluta obcaecati e voluptate id ullam?" },
        { id: 3, name: "Dima", text: " soluta obcaecati ab! Eaque voluptate id ullam?" }
    ],
    newPostText: {text: "" }
}

const postReducer = (state = initialState, action) => {
    
    switch(action.type){
        case ADD_POST:
                state.posts.push({
                id: 4,
                name: "Vasa",
                text: state.newPostText.text
            })
            state.newPostText.text = ""
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText.text = action.text
            return state
        default: return state
    }
}

export const updateNewPostAction = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})
export const addPost = () => ({type: ADD_POST})
export default postReducer
