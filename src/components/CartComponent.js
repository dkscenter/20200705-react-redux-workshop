import React, { Component } from "react";
import Sidebar from "react-sidebar";
import { StoreContext } from "../context/store-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";

class CartComponent extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {({ store, toggleCart, addCartAmount, withComma }) => {
          let { products } = store.cart;
          console.log(products, products.length);
          let totalPrice =
            products.length <= 1
              ? products.length <= 0
                ? 0
                : products[0].productPrice * products[0].amount
              : products.reduce((accumulator, product) =>
                  accumulator.productPrice
                    ? (accumulator.productPrice * accumulator.amount) +
                      (product.productPrice * product.amount)
                    : accumulator + (product.productPrice * product.amount)
                );
          return (
            <Sidebar
              sidebar={
                products.length <= 0 ? (
                  <div className="sidebar">No item</div>
                ) : (
                  <div className="sidebar">
                    {products.map((product, index) => (
                      <div
                        className="cart-item"
                        key={"product-cart-" + product.productNumber}
                      >
                        <div className="product-name">
                          ฿{product.productPrice} {product.productName}
                        </div>
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
                            {withComma(product.amount)}
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
                    <hr />
                    Total Price: ฿{withComma(totalPrice)}
                    <Button
                      className="cart-checkout"
                      size="sm"
                      color="secondary"
                    >
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
                  minWidth: 300,
                  color: "#fff",
                  zIndex: "99",
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
