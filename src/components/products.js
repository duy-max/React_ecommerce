import React, { Component } from "react";
import Product from "./product";
import { connect } from "react-redux";
class Products extends Component {
    render() {
        var { products } = this.props;

        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {this.showProduct(products)}
                </div>
            </section>
        )
    }

    showProduct(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product key={index} product ={product}/>;  //Tạo ra 1 props product để vào component product show data
            });
        }
        return result;
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.products
    };
}
export default connect(mapStateToProps, null)(Products);

