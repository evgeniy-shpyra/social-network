const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

postReducer = (state, action) => {
    switch(action.type){
        case ADD_POST:
            state.posts.push({
                id: 4,
                name: "Vasa",
                text: state.newPostText.text
            })
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
