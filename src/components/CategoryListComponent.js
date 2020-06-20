import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LocationComponent from './LocationComponent';
import CategoryItemComponent from './CategoryItemComponent';
import products from '../constants/product';

class CategoryListComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories: []
        }

    }

    componentDidMount(){
        this.setState({
            categories: products
        });
    }

    render() {
        return (
            <div className="category-list">
                <LocationComponent/>
                {this.state.categories.map(category=>(
                    <Link key={`category-${category.categoryNumber}`} 
                    to={`/category/${category.categoryNumber}`}>
                        <CategoryItemComponent 
                            image={category.categoryImage} 
                            title={category.categoryName}
                        />
                    </Link>
                ))}
                
            </div>
        )
    }
}

export default CategoryListComponent;