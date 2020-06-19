import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ProductList extends Component {
    render() {
        return (
            <div className="product-list">
                
                <div className="product-overlay">
                    <Link to="/product/1">
                        <div className="product-item">
                            <div className="img-box">
                                <img src="/images/01/01.webp" alt="SPINACH SOUP"/>
                            </div>
                            <div className="product-detail d-font">SPINACH SOUP</div>
                        </div>
                    </Link>
                </div>
                
                <div className="product-overlay">
                    <Link to="/product/2">
                        <div className="product-item">
                            <div className="img-box">
                                <img src="/images/01/02.webp" alt="CRAB CHOWDER"/>
                            </div>
                            <div className="product-detail d-font">CRAB CHOWDER</div>
                        </div>
                    </Link>
                </div>
                <div className="product-overlay">
                    <Link to="/product/3">
                        <div className="product-item">
                            <div className="img-box">
                                <img src="/images/01/03.webp" alt="PARMA HAM SALAD"/>
                            </div>
                            <div className="product-detail d-font">PARMA HAM SALAD</div>
                        </div>
                    </Link>
                </div>
                <div className="product-overlay">
                    <Link to="/product/4">
                        <div className="product-item">
                            <div className="img-box">
                                <img src="/images/01/04.webp" alt="SPICY TUNA SALAD"/>
                            </div>
                            <div className="product-detail d-font">SPICY TUNA SALAD</div>
                        </div>
                    </Link>
                </div>
                <div className="product-overlay">
                    <Link to="/product/5">
                        <div className="product-item">
                            <div className="img-box">
                                <img src="/images/01/05.webp" alt="SOFT SHELL CRAB SALAD"/>
                            </div>
                            <div className="product-detail d-font">SOFT SHELL CRAB SALAD</div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
