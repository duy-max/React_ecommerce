import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "./../components/cart";
import CartItem from "./../components/cart_item";
import PropTypes from 'prop-types';
import * as message from "./../constants/message";
import * as actions from "./../actions/index";
import CartResult from "./../components/cart_result";
class CartContainer extends Component {
    render() {

        var { cart } = this.props;

        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}



            </Cart>

        )
    }

    showCartItem = (cart) => {
        //  var result = message.MSG_CART_EMPTY;
        var { deleteCartItem, onChangeMsg, onUpdateQuantity } = this.props;
        if (cart.length > 0) {
            var result = cart.map((cartItem, index) => {
                return (
                    <CartItem key={index} cartItem={cartItem} deleteCartItem={deleteCartItem}
                        onChangeMsg={onChangeMsg} onUpdateQuantity={onUpdateQuantity}
                    />
                )
            })
        }


        return result;

    }

    showTotalAmount = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }



}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                img: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired,
            }),
            quantity: PropTypes.number.isRequired
        })
    ).isRequired, //Kiểm tra xem props products có phải array không?; isRequired nghĩa là buộc phải có
    deleteCartItem: PropTypes.func.isRequired,
    onChangeMsg: PropTypes.func.isRequired,
    onUpdateQuantity: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {   //get state from store and map to props
    return {
        cart: state.cart

    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteCartItem: (product) => {
            dispatch(actions.actDeleteCartItem(product))
        },
        onChangeMsg: (message) => {
            dispatch(actions.actChangeMsg(message))
        },

        onUpdateQuantity: (product, quantity) => {
            dispatch(actions.actUpdateQuantity(product, quantity))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);





