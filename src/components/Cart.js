import React, { Component } from 'react'
import Sidebar from "react-sidebar";
import {StoreContext} from '../context/store-context';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from 'reactstrap';

class Cart extends Component {
    constructor(props) {
    super(props);
        this.state = {
            sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
    
    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }
     
    render() {
        return (
            <StoreContext.Consumer>
            {({store,toggleCart}) => {
                return (
                    <Sidebar
                        sidebar={(
                            <div className="sidebar">
                                <div className="cart-item">
                                    <div className="product-name">SOFT SHELL CRAB SALAD</div>
                                    <div className="cart-amount">
                                        <div className="cart-minus">
                                            <FontAwesomeIcon icon={['fas', 'minus']} />
                                        </div>
                                        <div className="cart-amount-value">
                                            1
                                        </div>
                                        <div className="cart-plus">
                                            <FontAwesomeIcon icon={['fas', 'plus']} />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="cart-item">
                                    <div className="product-name">KONA BIG WAVE</div>
                                    <div className="cart-amount">
                                        <div className="cart-minus">
                                            <FontAwesomeIcon icon={['fas', 'minus']} />
                                        </div>
                                        <div className="cart-amount-value">
                                            1
                                        </div>
                                        <div className="cart-plus">
                                            <FontAwesomeIcon icon={['fas', 'plus']} />
                                        </div>
                                    </div>
                                </div>
                                <Button className="cart-checkout" size="sm" color="secondary">Checkout</Button>
                            </div>
                        )}
                        open={store.cart.isOpen}
                        onSetOpen={toggleCart}
                        styles={{ sidebar: { 
                            background: "rgb(43, 59, 75)", 
                            position: store.cart.isOpen ? "fixed" : "absolute",
                            width: "80%",
                            color: "#fff"
                        } }}
                        pullRight={true}
                    >
                        <div className="delivery-container">
                            {this.props.children}
                        </div>
                    </Sidebar>
                    )
            }}
            </StoreContext.Consumer>
        )
    }
}

// Cart.contextType = StoreContext;
export default Cart;