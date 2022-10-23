const defaultState={
    direct: '/blank_basket'
}
export const reducer_basket_fullness=(state=defaultState,action: { type: string })=>{
    switch (action.type) {
        case "change_basket_blank":
            return {...state,direct: state.direct='/blank_basket'}
        case "change_basket_full":
            return {...state,direct: state.direct='/basket'}
        default:
            return state
    }
}