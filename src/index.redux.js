const add_gun = 'add',minus_gun = 'minus';

//reducer
export function counter(state = 0,action){
    switch (action.type) {
        case add_gun:
            return state+1;
        case minus_gun:
            return state-1;
        default:
            return 10//赋予state初值10
    }
}

//creator action
export function addGun() {
    return ({type:add_gun})
}
export function minusGun() {
    return ({type:minus_gun})
}
export function minusGunAsync() {
    return dispatch=>{
        setTimeout(()=>{
            dispatch(minusGun())
        },2000)
    }
}