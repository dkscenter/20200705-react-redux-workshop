import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProductItemComponent extends Component {
    render() {
        let { categoryId, productId } = this.props.match.params;
        return (
            <div className="product-item">
                <div className="product-img">
                    <img src={`/images/${categoryId}/${productId}.webp`} alt="SPINACH SOUP"/>
                </div>
                <a href="#">
                    <div className="add-cart">
                        <div className="add-cart-text">
                            <div className="icon">
                            <FontAwesomeIcon icon={['fas', 'cart-arrow-down']} />
                            </div>
                            <div className="text">
                                Add Cart
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}

export default withRouter(ProductItemComponent);
