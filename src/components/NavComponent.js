import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'

class NavComponent extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="nav-title">
          <Link to="/">Delivery Workshop</Link>
        </div>
        <div className="nav-menu">
          <button
            onClick={this.props.toggleSidebar}
            className="btn text-light cart-total-amount-btn"
          >
            <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
            <div className="cart-total-amount bg-danger">{this.props.cart.products.length}</div>
          </button>
          <Link to="/profile">
            <button className="btn text-light">
              <FontAwesomeIcon icon={["fas", "user-circle"]} />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(store=>{
  return {
    cart: store.cart
  }
})(NavComponent)
