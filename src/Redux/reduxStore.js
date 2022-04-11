import { createStore, combineReducers, applyMiddleware } from 'redux'
import menuReducer from "./menuReducer"
import messageReducer from "./messageReducer";
import postReducer from './postReducer';
import headerReducer from './headerReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'




let reducers = combineReducers({
    header: headerReducer,
    menu: menuReducer,
    profilePage: profileReducer,
    postPage: postReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})



let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store