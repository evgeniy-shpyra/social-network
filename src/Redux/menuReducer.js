const UPDATE_ACTIVE_MENU_ITEM = 'UPDATE-ACTIVE-MENU-ITEM'

let initialState = {
    menuItems: [
        { id: 1, body: "Profile" },
        { id: 2, body: "Massages" },
        { id: 4, body: "Users" },
    ]
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

export const updateActiveItemMenu = (text) => ({ type: UPDATE_ACTIVE_MENU_ITEM, text: text })
export default menuReducer