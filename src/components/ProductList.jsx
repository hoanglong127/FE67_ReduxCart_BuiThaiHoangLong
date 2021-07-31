import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  renderProducts = () => {
    return this.props.products.map((item) => (
      <div key={item.id} className="col-3">
        <ProductItem product={item} />
      </div>
    ));
  };

  render() {
    return (
      <div className="container-fluid my-4">
        <div className="row">{this.renderProducts()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.productReducer.productList,
});

export default connect(mapStateToProps)(ProductList);
