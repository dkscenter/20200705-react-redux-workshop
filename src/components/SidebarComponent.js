import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "react-sidebar";
import { Button } from "reactstrap";
import { connect } from "react-redux";

class SidebarComponent extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      open: props.open,
    };
  }

  render() {
    let { products } = this.props.cart;
    return (
      <Sidebar
        sidebar={
          <div className="sidebar">
            {products.map((product, index) => {
              return (
                <div className="cart-item" key={`product-cart-item-${index}`}>
                  <div className="product-name">
                    ฿{product.productPrice} {product.productName}
                  </div>
                  <div className="cart-amount">
                    <button className="cart-minus">
                      <FontAwesomeIcon icon={["fas", "minus"]} />
                    </button>
                    <div className="cart-amount-value">{product.amount}</div>
                    <button className="cart-plus">
                      <FontAwesomeIcon icon={["fas", "plus"]} />
                    </button>
                  </div>
                </div>
              );
            })}
            <hr />
            Total Price: ฿280
            <Button className="cart-checkout" size="sm" color="secondary">
              Checkout
            </Button>
          </div>
        }
        open={this.state.open}
        onSetOpen={this.props.toggleSidebar}
        styles={{
          sidebar: {
            background: "rgb(43, 59, 75)",
            position: "fixed",
            minWidth: 300,
            color: "#fff",
            zIndex: "99",
          },
        }}
        pullRight={true}
      >
        {this.props.children}
      </Sidebar>
    );
  }
}

export default connect((store) => {
  return {
    cart: store.cart,
  };
})(SidebarComponent);
