import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import categories from "../constants/product";
import { addCart } from "../redux/actions/cartActions";
import { connect } from "react-redux";

class ProductComponent extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    // const res = await Axios.get("https://reqres.in/api/users?page=1");
    // this.setState({
    //     users: res.data.data
    // })
    let { id } = this.props.match.params;
    let category = categories.find((item) => item.categoryNumber === id);
    this.setState({
      products: category.products,
    });
  }

  render() {
    return (
      <div className="product-list row">
        {this.state.products.map((product, index) => (
          <div
            key={"product-item-" + index}
            onClick={()=>{
              this.props.addCart({
                productNumber: product.productNumber,
                productName: product.productName,
                productPrice: product.productPrice,
                amount: 1
              });
            }}
            className="product-overlay col-sm-6 col-md-4 col-lg-3"
          >
            <div className="product-item">
              <div className="img-box">
                <img src={product.productImage} alt={"Hello"} />
              </div>
              <div className="product-detail d-font">
                {product.productName} ฿{product.productPrice}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default connect(null, { addCart })(withRouter(ProductComponent));
