import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import products from '../constants/product';

class ProductListComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            category: {}
        }
    }

    componentDidMount(){
        let { id } = this.props.match.params;
        this.setState({
            category: products.find((category)=>{
                return category.categoryNumber === id;
            })
        });
        
    }

    render() {
        let {category} = this.state;
        return (
            <div className="product-list row">
                {category.products && category.products.map(product=>(
                    <div 
                    className="product-overlay col-sm-6 col-md-4 col-lg-3" 
                    key={`product-${product.productNumber}`}>
                        <Link to={`/category/${category.categoryNumber}/product/${product.productNumber}`}>
                            <div className="product-item">
                                <div className="img-box">
                                    <img 
                                    src={`/images/${category.categoryNumber}/${product.productNumber}.webp`} 
                                    alt={product.productName}/>
                                </div>
                                <div className="product-detail d-font">{product.productName}</div>
                            </div>
                        </Link>
                    </div>
                ))}
                
            </div>
        )
    }
}

export default withRouter(ProductListComponent);