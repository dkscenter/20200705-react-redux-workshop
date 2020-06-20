import React, { Component } from "react";
import Sidebar from "react-sidebar";
import { StoreContext } from "../context/store-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";

class CartComponent extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {({ store, toggleCart, addCartAmount }) => {
          let { products } = store.cart;
          return (
            <Sidebar
              sidebar={ products.length <= 0 ? (
                <div className="sidebar">No item</div>
              ) : (
                  <div className="sidebar">
                    {products.map((product,index) => (
                      <div
                        className="cart-item"
                        key={"product-cart-" + product.productNumber}
                      >
                        <div className="product-name">{product.productName}</div>
                        <div className="cart-amount">
                          <button
                            onClick={() => {
                              addCartAmount(index, "minus");
                            }}
                            className="cart-minus"
                          >
                            <FontAwesomeIcon icon={["fas", "minus"]} />
                          </button>
                          <div className="cart-amount-value">
                            {product.amount}
                          </div>
                          <button
                            onClick={() => {
                              addCartAmount(index, "plus");
                            }}
                            className="cart-plus"
                          >
                            <FontAwesomeIcon icon={["fas", "plus"]} />
                          </button>
                        </div>
                      </div>
                    ))}

                    <Button className="cart-checkout" size="sm" color="secondary">
                      Checkout
                    </Button>
                  </div>
                )
              }
              open={store.cart.isOpen}
              onSetOpen={toggleCart}
              styles={{
                sidebar: {
                  background: "rgb(43, 59, 75)",
                  position: store.cart.isOpen ? "fixed" : "absolute",
                  width: "80%",
                  color: "#fff",
                },
              }}
              pullRight={true}
            >
              <div className="delivery-container">{this.props.children}</div>
            </Sidebar>
          );
        }}
      </StoreContext.Consumer>
    );
  }
}

// Cart.contextType = StoreContext;
export default CartComponent;
