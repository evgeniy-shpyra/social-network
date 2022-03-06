import { createStore, combineReducers } from 'redux'
import menuReducer from "./menuReducer"
import messageReducer from "./messageReducer";
import postReducer from './postReducer';
import headerReducer from './headerReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
    header: headerReducer,
    menu: menuReducer,
    profilePage: profileReducer,
    postPage: postReducer,
    messagePage: messageReducer,
    usersPage: usersReducer
})



let store = createStore(reducers)

window.store = store

export default store