import React, { Component } from "react";
import { Link } from "react-router-dom";
import LocationComponent from "./LocationComponent";
import CategoryItemComponent from "./CategoryItemComponent";
import products from "../constants/product";

class CategoryListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.setState({
      categories: products,
    });
  }

  render() {
    return (
      <div className="category-list">
        <LocationComponent />
        <div className="row">
          {this.state.categories.map((category) => (
            <div
              className="col-sm-12 col-md-6"
              key={`category-${category.categoryNumber}`}
            >
              <Link to={`/category/${category.categoryNumber}`}>
                <CategoryItemComponent
                  image={category.categoryImage}
                  title={category.categoryName}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CategoryListComponent;
