const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

const messageReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            this.state.messagesPage.messages.push({
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