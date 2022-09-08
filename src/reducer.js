
const reducer = (state, action) => {
    if(action.type === "CLEAR_CART") {
        return { ...state, cart: [] }
    }
    if(action.type === "REMOVE_ITEM") {
        return {
            ...state,
            cart: state.cart.filter((cartItem) => cartItem.id !== action.payload)
        }
    }
    if(action.type === "INCREASE") {
        let tempCart = state.cart.map((cartItem) => {
            if(cartItem.id === action.payload){
                return {
                    ...cartItem, 
                    amount: cartItem.amount + 1
                }
            }
        })
        return {
            ...state,
            cart: tempCart
        }
    }
    return state
}

export default reducer