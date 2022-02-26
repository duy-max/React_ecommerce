
import React, { Component } from "react";
import * as Message from "./../constants/message";
class CartItem extends Component {
    render() {
        var { cartItem } = this.props;
        var { quantity } = cartItem;
        return (
            <tr>
                <th scope="row">
                    <img src={cartItem.product.img} />
                </th>
                <td>
                    <h5>
                        <strong>{cartItem.product.name}</strong>
                    </h5>
                </td>
                <td>{cartItem.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light"
                            onClick={() => this.onUpdateQuantity(cartItem.product, cartItem.quantity - 1)}
                        >
                            <a>—</a>
                        </label>
                        <label className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light"
                            onClick={() => this.onUpdateQuantity(cartItem.product, cartItem.quantity + 1)}
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showSubTotal(cartItem.product.price, cartItem.quantity)}$</td>
                <td>
                    <button
                        type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" data-original-title="Remove item"
                        onClick={() => this.deleteCartItem(cartItem.product)}
                    >
                        X
                    </button>
                </td>
            </tr>
        )
    }

    onUpdateQuantity = (product, quantity) => {
        var { onUpdateQuantity, onChangeMsg } = this.props;
        if (quantity > 0) {

            onUpdateQuantity(product, quantity);
            onChangeMsg(Message.MSG_UPDATE_CART_SUCCESS);
        }

    }

    showSubTotal = (price, quantity) => {
        return price * quantity;
    }

    deleteCartItem = (product) => {
        var { deleteCartItem, onChangeMsg } = this.props;
        deleteCartItem(product);
        onChangeMsg(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }
}



export default CartItem;


