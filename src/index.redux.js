const add_gun = 'add',minus_gun = 'minus';

//reducer
function counter(state = 0,action){
    switch (action.type) {
        case add_gun:
            return state+1;
        case minus_gun:
            return state-1;
        default:
            return 10
    }
}

//creator action
export function addGun() {
    return ({type:add_gun})
}
export function minusGun() {
    return ({type:minus_gun})
}