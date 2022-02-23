const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Nazar" },
        { id: 3, name: "Artur" },
        { id: 4, name: "Vika" },
        { id: 5, name: "Luda" }
    ],
    messages: [
        { id: 1, text: "Hello", time: "09:12", isMyMessage: true },
        { id: 2, text: "Hi", time: "21:12", isMyMessage: false },
        { id: 3, text: "My name is Evgeniy", time: "09:12", isMyMessage: true },
        { id: 4, text: "yo", time: "21:12", isMyMessage: false }
    ],
    newMessageText: {text: ""}
}

const messageReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_MESSAGE:
                state.messages.push({
                id: 5,
                text: state.newMessageText.text,
                time: '01.00',
                isMyMessage: true
            })
            state.newMessageText.text = ""
            return state

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText.text = action.text
            return state

        default: return state
    }
}

export const updateNewMassageAction = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text})
export const addMessageAction = () => ({ type: ADD_MESSAGE})
export default messageReducer