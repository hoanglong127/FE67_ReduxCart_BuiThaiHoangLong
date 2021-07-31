import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "../store/actions";

class Cart extends Component {
  handleChangeQuantity = (id, status) => {
    this.props.dispatch(createAction("UPDATE_QUANTITY_ITEM", { id, status }));
  };

  handleDeleteItem = (id) => {
    this.props.dispatch(createAction("DELETE_CART_ITEM", id));
  };

  renderCart = () => {
    return this.props.cart.map((item) => {
      const { id, name, img, price } = item.product;

      return (
        <tr key={id}>
          <td>{id}</td>
          <td>
            <img style={{ width: 75 }} src={img} alt={name} />
          </td>
          <td>{name}</td>
          <td>
            <button
              className="btn btn-info px-2 py-0"
              onClick={() => this.handleChangeQuantity(id, false)}
            >
              -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button
              className="btn btn-info px-2 py-0"
              onClick={() => this.handleChangeQuantity(id, true)}
            >
              +
            </button>
          </td>
          <td className="text-danger">{price.toLocaleString()}</td>
          <td className="text-danger">
            {(price * item.quantity).toLocaleString()}
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.handleDeleteItem(id)}
            >
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th>Mã</th>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.cart.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="text-center">
                        Không có sản phẩm
                      </td>
                    </tr>
                  ) : (
                    this.renderCart()
                  )}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="7" className="text-right">
                      Tổng tiền:{" "}
                      <span className="text-danger">
                        {this.props.cart
                          .reduce(
                            (total, item) =>
                              (total += item.product.price * item.quantity),
                            0
                          )
                          .toLocaleString()}
                      </span>{" "}
                      đ
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart,
});

export default connect(mapStateToProps)(Cart);
