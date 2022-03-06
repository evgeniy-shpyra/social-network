
let initialState = {
    profiles: [
        { id: 1, name: 'Evgeniy', rating: 10.2 }
    ]
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        default: return state
    } 
}

export default profileReducer