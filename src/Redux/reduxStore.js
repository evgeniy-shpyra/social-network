import { createStore, combineReducers } from 'redux'
import menuReducer from "./menuReducer"
import messageReducer from "./messageReducer";
import postReducer from './postReducer';
import headerReducer from './headerReducer';

let reducers = combineReducers({
    header: headerReducer,
    menu: menuReducer,
    postPage: postReducer,
    messagePage: messageReducer
})

let store = createStore(reducers)

export default store