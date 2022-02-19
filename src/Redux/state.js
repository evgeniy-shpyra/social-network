const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const UPDATE_ACTIVE_MENU_ITEM = 'UPDATE-ACTIVE-MENU-ITEM'

let store = {

    _state: {
        menu: {
            menuItems:[
                {id: 1, body:"Posts"},
                {id: 2, body:"Massages"},
                {id: 3, body:"Friends"},
                {id: 4, body:"Settings"}
            ],
            activeMenu: ""
        },
        profilePage: {
            messagesPage: {
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
            },
            postsPage: {
                posts: [
                    { id: 1, name: "Evgeniy", text: "culpa, accusamus blanditiis, soluta obcaecati ab! Eaque voluptate id ullam?" },
                    { id: 2, name: "Vasa", text: "culpa, accusamus blanditiis, soluta obcaecati e voluptate id ullam?" },
                    { id: 3, name: "Dima", text: " soluta obcaecati ab! Eaque voluptate id ullam?" }
                ],
                newPostText: {text: "" }
            }
        }
    },

    _callSubscriber() { },
    subscriber(observer) {
        this._callSubscriber = observer
    },
    
    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            this._state.postsPage.posts.push({
                id: 4,
                name: "Vasa",
                text: this._state.postsPage.newPostText.text
            })
        }
        else if (action.type === ADD_MESSAGE) {
            this._state.messagesPage.messages.push({
                id: 5,
                text: this._state.messagesPage.newMessageText.text,
                time: '01.00',
                isMyMessage: true
            })
            this._state.messagesPage.newMessageText.text = ""
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.postsPage.newPostText.text = action.text
        }
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT){  
            this._state.messagesPage.newMessageText.text = action.text
        }
        else if(action.type === UPDATE_ACTIVE_MENU_ITEM){
            this._state.menu.activeMenu = action.text
        }

        this._callSubscriber(this.getState())
    }
}

export const addMessageAction = () => ({ type: ADD_MESSAGE})
export const updateNewPostAction = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})
export const addPost = () => ({type: ADD_POST})
export const updateNewMassageAction = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text})
export const updateActiveMenuItemAction = (text) => ({type: UPDATE_ACTIVE_MENU_ITEM, text: text})

export default store
