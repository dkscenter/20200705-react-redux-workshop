import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "react-sidebar";
import { Button } from "reactstrap";

class App extends React.Component {
  render() {
    return (
      <div className="delivery">
        <div className="navbar">
          <div className="nav-title">
            <a href="/">Delivery Workshop</a>
          </div>
          <div className="nav-menu">
            <button className="btn text-light cart-total-amount-btn">
              <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
              <div className="cart-total-amount bg-danger">5</div>
            </button>
            <button className="btn text-light">
              <FontAwesomeIcon icon={["fas", "user-circle"]} />
            </button>
          </div>
        </div>
        <Sidebar
          sidebar={
            <div className="sidebar">
              <div className="cart-item">
                <div className="product-name">฿280 PARMA HAM SALAD</div>
                <div className="cart-amount">
                  <button className="cart-minus">
                    <FontAwesomeIcon icon={["fas", "minus"]} />
                  </button>
                  <div className="cart-amount-value">1</div>
                  <button className="cart-plus">
                    <FontAwesomeIcon icon={["fas", "plus"]} />
                  </button>
                </div>
              </div>
              <hr />
              Total Price: ฿280
              <Button className="cart-checkout" size="sm" color="secondary">
                Checkout
              </Button>
            </div>
          }
          open={false}
          onSetOpen={() => {}}
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
          <div className="delivery-container">
            <div className="category-list">
              <div className="location">
                <div className="location-text">Click to set Address</div>
                <div className="location-edit">
                  <FontAwesomeIcon icon={["fas", "edit"]} />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="category-box">
                    <div className="category-img">
                      <img src={"/images/01.jpg"} alt="Soup" />
                    </div>
                    <div className="category-detail">
                      <p className="d-font">Hello</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </div>
    );
  }
}

export default App;
