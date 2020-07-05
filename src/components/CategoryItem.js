import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CategoryItem extends Component {
  render() {
    let { name, image, hello, inputText, categoryNumber } = this.props;
    return (
      <div className="col-sm-12 col-md-6" onClick={() => hello(name)}>
        <Link to={"/category/" + categoryNumber}>
          <div className="category-box">
            <div className="category-img">
              <img src={image} alt="Soup" />
            </div>
            <div className="category-detail">
              <p
                style={{ color: inputText === name && "yellow" }}
                className="d-font"
              >
                {name}
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
