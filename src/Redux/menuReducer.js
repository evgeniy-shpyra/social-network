const UPDATE_ACTIVE_MENU_ITEM = 'UPDATE-ACTIVE-MENU-ITEM'

const menuReducer = (state, action) => {
    switch(action.type){
        case UPDATE_ACTIVE_MENU_ITEM:
            state.activeMenu = action.text
            return state
        default: return state
    } 
}

export const updateActiveMenuItemAction = (text) => ({type: UPDATE_ACTIVE_MENU_ITEM, text: text})
export default menuReducer