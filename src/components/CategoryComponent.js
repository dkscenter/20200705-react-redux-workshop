import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoryItem from "./CategoryItem";
import categories from "../constants/product";

export default class CategoryComponent extends Component {
  constructor() {
    super();

    this.state = {
      inputText: "Hello World",
    };
  }

  render() {
    return (
      <div className="category-list">
        <div className="location">
          <div className="location-text">Click to set Address</div>
          <div className="location-edit">
            <FontAwesomeIcon icon={["fas", "edit"]} />
          </div>
        </div>
        {/* <input
            value={this.state.inputText}
            type="text"
            name="inputName"
            onChange={(e) => {
              this.setState({
                inputText: e.target.value,
              });
            }}
          />
          {this.state.inputText} */}
        <div className="row">
          {categories.map((category, index) => (
            <CategoryItem
              key={`category-product-${index}`}
              name={category.categoryName}
              image={category.categoryImage}
              inputText={this.state.inputText}
              categoryNumber={category.categoryNumber}
              hello={(text) => {
                this.setState({
                  inputText: text,
                });
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}
