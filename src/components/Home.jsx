import React, { Component } from "react";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container text-center my-3">
          <h1 className="text-info mb-3">Shopping Cart</h1>
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.props.cart.length})
          </button>
        </div>
        <ProductList />
        <Cart />
        {this.props.selectedProduct && <ProductDetail />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedProduct: state.productReducer.selectedProduct,
  cart: state.cartReducer.cart,
});

export default connect(mapStateToProps)(Home);
