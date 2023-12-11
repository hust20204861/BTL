import { ADD_TO_CART, REMOVE_ITEM_CART } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [], shippingInfo: {} }, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            const item = action.payload;

            const isItemExist = state.cartItems.find(i => i.course === item.course)

            if (isItemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(i => i.course === isItemExist.course ? item : i)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case REMOVE_ITEM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(i => i.course !== action.payload)
            }

        default:
            return state
    }
}