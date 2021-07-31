import React, { Component } from "react";
import { connect } from "react-redux";

class ProductDetail extends Component {
  render() {
    const {
      name,
      img,
      screen,
      os,
      frontCamera,
      backCamera,
      chip,
      ram,
      rom,
      pin,
    } = this.props.selectedProduct;

    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-5">
            <h4 className="text-center mb-4">{name}</h4>
            <img className="w-100 d-block" src={img} alt={name} />
          </div>
          <div className="col-7">
            <h4 className="mb-4">Thông số kỹ thuật</h4>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{screen}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{os}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{frontCamera}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{backCamera}</td>
                </tr>
                <tr>
                  <td>Chip</td>
                  <td>{chip}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{rom}</td>
                </tr>
                <tr>
                  <td>Pin</td>
                  <td>{pin}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }
}

const mapStateToProps = (state) => ({
  selectedProduct: state.productReducer.selectedProduct,
});

export default connect(mapStateToProps)(ProductDetail);
