import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StoreContext } from "../context/store-context";
import categories from "../constants/product";

class ProductItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    let { categoryId, productId } = this.props.match.params;
    console.log(categoryId, productId);
    let category = categories.find(
      (category) => category.categoryNumber === categoryId
    );
    let product = category.products.find(
      (product) => product.productNumber === productId
    );
    this.setState({
      product,
    });
  }

  render() {
    let { product } = this.state;
    return !product.productNumber ? (
      <div>Loading...</div>
    ) : (
      <StoreContext.Consumer>
        {({ addCart }) => (
          <div className="product-item">
            <div className="product-img-box">
              <div className="product-blur" style={{backgroundImage: `url(${product.productImage})`}} />
              <img className="product-image" src={product.productImage} alt={product.productName} />
            </div>
            <button
              className="btn"
              onClick={() => {
                addCart(product);
              }}
            >
              <div className="add-cart">
                <div className="add-cart-text">
                  <div className="icon">
                    <FontAwesomeIcon icon={["fas", "cart-arrow-down"]} />
                  </div>
                  <div className="text">Add Cart</div>
                </div>
              </div>
            </button>
          </div>
        )}
      </StoreContext.Consumer>
    );
  }
}

export default withRouter(ProductItemComponent);
