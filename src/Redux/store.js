import menuReducer from "./menuReducer"
import messageReducer from "./messageReducer";
import postReducer from './postReducer';

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
                { id: 1, author: "Evgeniy", body: "culpa, accusamus blanditiis, soluta obcaecati ab! Eaque voluptate id ullam?" },
                { id: 2, author: "Vasa", body: "culpa, accusamus blanditiis, soluta obcaecati e voluptate id ullam?" },
                { id: 3, author: "Dima", body: " soluta obcaecati ab! Eaque voluptate id ullam?" }
            ],
            newPostBody: {body: "" }
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

        this._state.menu = menuReducer(this._state.menu, action)
        this._state.postsPage = postReducer(this._state.postsPage, action)
        this._state.messagesPage = messageReducer(this._state.messagesPage, action)

        this._callSubscriber(this.getState())
    }
}

export default store
