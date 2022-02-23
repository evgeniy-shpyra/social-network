const UPDATE_ACTIVE_MENU_ITEM = 'UPDATE-ACTIVE-MENU-ITEM'

let initialState = {
    menuItems:[
        {id: 1, body:"Posts"},
        {id: 2, body:"Massages"},
        {id: 3, body:"Friends"},
        {id: 4, body:"Settings"}
    ],
    activeMenu: ""
}

const menuReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_ACTIVE_MENU_ITEM:
            state.activeMenu = action.text
            return state
        default: return state
    } 
}

export const updateActiveMenuItemAction = (text) => ({type: UPDATE_ACTIVE_MENU_ITEM, text: text})
export default menuReducer