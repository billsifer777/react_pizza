const defaultState={
    pcs:0
}
export const reducer_pcs=(state=defaultState,action: { type: any; payload: number; })=>{
    switch (action.type) {
        case "add_count":
            return {...state,pcs: state.pcs+action.payload}
        case "set_null_pcs":
            return {...state,pcs: state.pcs=0}
        case "remote":
            return {...state,pcs: state.pcs-action.payload}
        default:
            return state
    }
}