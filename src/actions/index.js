
import * as types from "./../constants/actionTypes";


export const actAddToCart = (product, quantity) => {
      return {
            type: types.ADD_TO_CART,
            product,
            quantity
      }
}


export const actChangeMsg = (message) => {
      return {
            type: types.CHANGE_MSG,
            message

      }
}

export const actDeleteCartItem = (product) => {
      return {
            type: types.DELETE_CART_ITEM,
            product

      }
}


export const actUpdateQuantity = (product, quantity) => {
      return {
            type: types.UPDATE_QUANTITY,
            product,
            quantity

      }
}
