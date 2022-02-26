import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "./../components/products";
import Product from "./../components/product";
import PropTypes from 'prop-types';
import * as actions from "./../actions/index";
class ProductsContainer extends Component {
    render() {
        var { products } = this.props;


        return (
            <Products>
                {this.showProduct(products)}

            </Products>

        )
    }

    showProduct(products) {
        var result = null;
        var { onAddToCart, onChangeMsg } = this.props;

        if (products.length > 0) {
            result = products.map((product, index) => {
                return (<Product key={index} product={product}
                    onAddToCart={onAddToCart} onChangeMsg={onChangeMsg}
                />);  //Tạo ra 1 props product để vào component product show data, truyen vao component product
            });
        }
        return result;
    }


}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,


        })
    ).isRequired,  //Kiểm tra xem props products có phải array không?; isRequired nghĩa là buộc phải có
    onChangeMsg: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {   //get state from store and map to props
    return {
        products: state.products
    };
}

const mapDispatchToProps = (dispatch, props) => {    //Mở rộng thêm case mua nhiều sp, vd này chỉ mua 1 sp
    return {
        onAddToCart: (product) => {
            dispatch(actions.actAddToCart(product, 1))
        },
        onChangeMsg: (message) => {
            dispatch(actions.actChangeMsg(message))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);

