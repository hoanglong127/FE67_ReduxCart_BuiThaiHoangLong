import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "../store/actions";

class ProductItem extends Component {
  handleSelectedProduct = () => {
    this.props.dispatch(
      createAction("SET_SELECTED_PRODUCT", this.props.product)
    );

    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  handleAddToCart = () => {
    this.props.dispatch(createAction("ADD_TO_CART", this.props.product));
  };

  render() {
    const { img, name, price } = this.props.product;

    return (
      <div className="card">
        <img className="card-img-top p-4" src={img} alt={name} />
        <div className="card-body">
          <h6 className="card-title">{name}</h6>
          <p className="card-text text-danger">{price.toLocaleString()} đ</p>
          <div className="card-buttons">
            <button
              className="btn btn-info mr-2"
              onClick={this.handleSelectedProduct}
            >
              Xem chi tiết
            </button>
            <button className="btn btn-danger" onClick={this.handleAddToCart}>
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(ProductItem);
