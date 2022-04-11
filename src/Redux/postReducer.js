const ADD_NEW_POST_TEXT = 'ADD_NEW_POST_TEXT'


let initialState = {
    posts: [
        { id: 1, author:'Evgeniy', body: "culpa, accusamus blanditiis, soluta obcaecati ab! Eaque voluptate id ullam?" },
        { id: 2, author:'Evgeniy', body: "culpa, accusamus blanditiis, soluta obcaecati e voluptate id ullam?" },
        { id: 3, author:'Evgeniy', body: " soluta obcaecati ab! Eaque voluptate id ullam?" },
        { id: 4, author:'Evgeniy', body: "culpa, accusamus blanditiis, soluta obcaecati ab! Eaque voluptate id ullam?" },
        { id: 5, author:'Evgeniy', body: "culpa, accusamus blanditiis, soluta obcaecati e voluptate id ullam?" },
        { id: 6, author:'Evgeniy', body: " soluta obcaecati ab! Eaque voluptate id ullam?" }
    ]
}

const postReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_NEW_POST_TEXT:
                
            return {
                ...state,
                posts: [...state.posts, {
                    id: 7,
                    author: 'Evgeniy',
                    body: action.postBody
                }]
            }
       
        default: return state
    }
}

export const addNewPost = (postBody) => ({ type: ADD_NEW_POST_TEXT, postBody })

export default postReducer
