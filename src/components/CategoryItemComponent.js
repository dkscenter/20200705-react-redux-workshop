import React, { Component } from 'react'

export default class CategoryItemComponent extends Component {
    render() {
        return (
            <div>
                <div className="category-box">
                    <div className="category-img">
                        <img src={this.props.image} alt="Soup"/>
                    </div>
                    <div className="category-detail">
                        <p className="d-font">{this.props.title}</p>
                    </div>
                </div>
            </div>
        )
    }
}
