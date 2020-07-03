import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';
import {StoreContext} from '../context/store-context';
import { shake } from 'react-animations'
import styled, { keyframes } from 'styled-components';
const shakeAnimation = keyframes`${shake}`;

class NavBarComponent extends Component {
    render() {
        return (
            <StoreContext.Consumer>
            {({toggleCart,store}) => {
                let totalAmount = store.cart.products.length;
                let CartDiv = styled.div``;
                if(store.cart.isAnimate){
                    CartDiv = styled.div`
                        animation: 1s ${shakeAnimation};
                    `;
                }
                
                return (
                    <div className="navbar">
                        <div className="nav-title"><Link to="/">Delivery Workshop</Link></div>
                        <div className="nav-menu">
                            <CartDiv>
                                <button className="btn text-light cart-total-amount-btn" onClick={toggleCart}>
                                    <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
                                    {totalAmount > 0 && <div className="cart-total-amount bg-danger">{totalAmount}</div>}
                                </button>
                            </CartDiv>
                            <button className="btn text-light">
                                <FontAwesomeIcon icon={['fas', 'user-circle']} />
                            </button>
                        </div>
                    </div>
                )
            }}
            </StoreContext.Consumer>
        )
    }
}

export default NavBarComponent;

