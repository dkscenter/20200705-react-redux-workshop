import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';
import {StoreContext} from '../context/store-context';
class NavBar extends Component {
    render() {
        return (
            <StoreContext.Consumer>
            {({toggleCart}) => {
                return (
                    <div className="navbar">
                        <div className="nav-title"><Link to="/">Delivery Workshop</Link></div>
                        <div className="nav-menu">
                            <a href="#" onClick={toggleCart}>
                                <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={['fas', 'user-circle']} />
                            </a>
                        </div>
                    </div>
                )
            }}
            </StoreContext.Consumer>
        )
    }
}

export default NavBar;

