const UPDATE_ACTIVE_MENU_ITEM = 'UPDATE-ACTIVE-MENU-ITEM'

let initialState = {
    menuItems: [
        { id: 1, body: "Profile" },
        { id: 2, body: "Posts" },
        { id: 3, body: "Massages" },
        { id: 4, body: "Friends" },
        { id: 5, body: "Users" },
        { id: 6, body: "Settings" }
    ],
    activeMenu: ""
}

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ACTIVE_MENU_ITEM:
            return {
                ...state,
                activeMenu: action.text
            }

        default: return state
    }
}

export const updateActiveMenuItemAction = (text) => ({ type: UPDATE_ACTIVE_MENU_ITEM, text: text })
export default menuReducer