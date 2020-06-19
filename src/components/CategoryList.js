import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Location from './Location';

export default class CategoryList extends Component {
    render() {
        return (
            <div className="category-list">
                <Location/>
                <Link to="/product">
                    <div className="category-box">
                        <div className="category-img">
                            <img src="/images/01.jpg" alt="Soup"/>
                        </div>
                        <div className="category-detail">
                            <p className="d-font">ซุป & สลัด</p>
                        </div>
                    </div>
                </Link>
                <Link to="/product">
                    <div className="category-box">
                        <div className="category-img">
                            <img src="/images/02.jpg" alt="Soup"/>
                        </div>
                        <div className="category-detail">
                            <p className="d-font">เบียร์สด</p>
                        </div>
                    </div>
                </Link>
                <Link to="/product">
                    <div className="category-box">
                        <div className="category-img">
                            <img src="/images/03.jpg" alt="Soup"/>
                        </div>
                        <div className="category-detail">
                            <p className="d-font">พิซซ่า</p>
                        </div>
                    </div>
                </Link>
                <Link to="/product">
                    <div className="category-box">
                        <div className="category-img">
                            <img src="/images/04.jpg" alt="Soup"/>
                        </div>
                        <div className="category-detail">
                            <p className="d-font">พาสต้า</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}
