import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  changeCart: ['cart'],
  changeItemcountup: ['cart'],
  changeItemcountdown: ['cart'],
  changeRemoveitem: ['cart'],
  changeClearcart: ['cart'],
})

export const CartTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  cart: [],
})

/* ------------- Reducers ------------- */

export const changeCart = (state, {cart}) => {
    let cartArray = [];
    
    for (let i = 0; i < state.cart.length; i++){
        cartArray.push(state.cart[i]);
    }

    cartArray.push(cart);

    return state.merge({ cart: cartArray })
}

export const changeItemcountup = (state, itemKey) => {
    let cartArray = [];
    
    for (let i = 0; i < state.cart.length; i++){
        cartArray.push(state.cart[i]);
    }

    cartArray[itemKey.cart] = {
        itemTitle: cartArray[itemKey.cart].itemTitle,
        itemPrice: cartArray[itemKey.cart].itemPrice,
        itemCount: parseInt(cartArray[itemKey.cart].itemCount) + 1,
        itemImage: cartArray[itemKey.cart].itemImage,
        itemExtras: cartArray[itemKey.cart].itemExtras,
    }

    return state.merge({ cart: cartArray })
}

export const changeItemcountdown = (state, itemKey) => {
    let cartArray = [];
    
    for (let i = 0; i < state.cart.length; i++){
        cartArray.push(state.cart[i]);
    }

    if(parseInt(cartArray[itemKey.cart].itemCount) > 1) {
        //We are able to reduce the counter
        cartArray[itemKey.cart] = {
            itemTitle: cartArray[itemKey.cart].itemTitle,
            itemPrice: cartArray[itemKey.cart].itemPrice,
            itemCount: parseInt(cartArray[itemKey.cart].itemCount) - 1,
            itemImage: cartArray[itemKey.cart].itemImage,
            itemExtras: cartArray[itemKey.cart].itemExtras,
        }
    }
    else {
        //We are NOT able to reduce the counter
        cartArray[itemKey.cart] = {
            itemTitle: cartArray[itemKey.cart].itemTitle,
            itemPrice: cartArray[itemKey.cart].itemPrice,
            itemCount: '1',
            itemImage: cartArray[itemKey.cart].itemImage,
            itemExtras: cartArray[itemKey.cart].itemExtras,
        }
    }

    return state.merge({ cart: cartArray })
}

export const changeRemoveitem = (state, itemKey) => {
    let cartArray = [];

    for (let i = 0; i < state.cart.length; i++){
        cartArray.push(state.cart[i]);
    }
    
    cartArray.splice(itemKey.cart, 1);

    return state.merge({ cart: cartArray })
}

export const changeClearcart = (state, {cart}) => {
    let cartArray = [];

    return state.merge({ cart: cartArray })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.CHANGE_CART]: changeCart,
    [Types.CHANGE_ITEMCOUNTUP]: changeItemcountup,
    [Types.CHANGE_ITEMCOUNTDOWN]: changeItemcountdown,
    [Types.CHANGE_REMOVEITEM]: changeRemoveitem,
    [Types.CHANGE_CLEARCART]: changeClearcart,
})
