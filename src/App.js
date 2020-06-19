import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import ProductItem from './components/ProductItem';
import Cart from './components/Cart';
import { StoreContext,store } from './context/store-context';

class App extends React.Component {
  constructor(props) {
    super(props);

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      store: store,
      toggleCart: ()=>{
        this.setState((state)=>({
          store: {
            ...state.store,
            cart: {
              ...state.store.cart,
              isOpen: state.store.cart.isOpen ? false : true
            }
          }
        }));
      }
    };
  }
  render(){
    return (
      <Router>
        <StoreContext.Provider value={this.state}>
          <div className="delivery">
            <NavBar/>
            <Cart>
              <Switch>
                <Route path="/product/:id">
                  <ProductItem/>
                </Route>
                <Route path="/product">
                  <ProductList/>
                </Route>
                <Route path="/">
                  <CategoryList/>
                </Route>
              </Switch>
            </Cart>
          </div>
        </StoreContext.Provider>
    </Router>
      
    );
  }
}

export default App;
