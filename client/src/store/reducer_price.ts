const defaultState={
    price:0
}
export const reducer_price=(state=defaultState,action: { type: any; payload: number; })=>{
    switch (action.type) {
        case "add_price":
            return {...state,price: state.price+action.payload}
        case "reset_price":
            return {...state,price: state.price=0}
        case "minus_price":
            return {...state,price: state.price-action.payload}
        default:
            return state
    }
}