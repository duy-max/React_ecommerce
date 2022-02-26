import React, { Component } from "react";
class Products extends Component {
    render() {
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {this.props.children}             {/*nhận props của productContainer gửi qua theo dạng children */}
                </div>
            </section>
        )
    }
}

export default Products;

