import { createStore, combineReducers, applyMiddleware } from 'redux'
import menuReducer from "./menuReducer"
import messageReducer from "./messageReducer";
import postReducer from './postReducer';
import headerReducer from './headerReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import authReducer from './authReduser';
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    header: headerReducer,
    menu: menuReducer,
    profilePage: profileReducer,
    postPage: postReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer
})



let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store