import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING } from "../constants/cartConstants";

function cartReducer(state = { cartItems: [] }, action) {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const paint = state.cartItems.find(x => x.paint === item.paint);
            if (paint) {
                return {
                    cartItems:
                     state.cartItems.map(x => x.paint === paint.paint ? item : x)
                };

            }
            return { cartItems: [...state.cartItems, item] };
            case CART_REMOVE_ITEM:
                return{ cartItems: state.cartItems.filter(x => x.paint !== action.payload)};
                case CART_SAVE_SHIPPING:
                    return{...state, shipping: action.payload}
            default: 
            return state
                
    }
}

export  {cartReducer};