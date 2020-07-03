import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";
import CategoryListComponent from "./components/CategoryListComponent";
import ProductListComponent from "./components/ProductListComponent";
import ProductItemComponent from "./components/ProductItemComponent";
import CartComponent from "./components/CartComponent";
import { StoreContext, store } from "./context/store-context";
import AddressComponent from "./components/AddressComponent";
import { LocationContext, location } from "./context/location-context";

class App extends React.Component {
  constructor(props) {
    super(props);

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      store: store,
      withComma: (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
      toggleCart: () => {
        this.setState((state) => ({
          store: {
            ...state.store,
            cart: {
              ...state.store.cart,
              isOpen: state.store.cart.isOpen ? false : true,
            },
          },
        }));
      },
      addCartAmount: (index, operator) => {
        let { products } = this.state.store.cart;
        products[index].amount =
          operator === "plus"
            ? products[index].amount + 1
            : products[index].amount - 1;

        if (products[index].amount <= 0) {
          products.splice(index, 1);
          this.__animateCart();
        }

        localStorage.setItem("cart", JSON.stringify(products));

        this.setState((state) => ({
          store: {
            ...state.store,
            cart: {
              ...state.store.cart,
              products,
            },
          },
        }));
      },
      addCart: (newProduct) => {
        let { products } = this.state.store.cart;
        let findProduct = products.findIndex(
          (product) => product.productNumber === newProduct.productNumber
        );
        if (findProduct >= 0) {
          products[findProduct].amount = products[findProduct].amount + 1;
        } else {
          newProduct.amount = 1;
          products.push(newProduct);
        }

        localStorage.setItem("cart", JSON.stringify(products));
        this.__animateCart();

        this.setState((state) => ({
          store: {
            ...state.store,
            cart: {
              ...state.store.cart,
              products,
            },
          },
        }));
      },
      location: {
        address: location.address,
        setAddress: (e) => {
          this.setState({
            location: {
              ...this.state.location,
              address: {
                ...this.state.location.address,
                [e.target.name]: e.target.value,
              },
            },
          });
        },
      },
    };
  }

  __animateCart = ()=>{
    this.setState((state) => ({
      store: {
        ...state.store,
        cart: {
          ...state.store.cart,
          isAnimate: true,
        },
      },
    }));
    setTimeout(() => {
      this.setState((state) => ({
        store: {
          ...state.store,
          cart: {
            ...state.store.cart,
            isAnimate: false,
          },
        },
      }));
    }, 1000);
  }

  render() {
    return (
      <Router>
        <LocationContext.Provider value={this.state.location}>
          <StoreContext.Provider value={this.state}>
            <div className="delivery">
              <NavBarComponent />
              <CartComponent>
                {/* <CategoryList/> */}
                <Switch>
                  <Route path="/address">
                    <AddressComponent />
                  </Route>
                  <Route path="/category/:categoryId/product/:productId">
                    <ProductItemComponent />
                  </Route>
                  <Route path="/category/:id">
                    <ProductListComponent />
                  </Route>
                  <Route path="/">
                    <CategoryListComponent />
                  </Route>
                </Switch>
              </CartComponent>
            </div>
          </StoreContext.Provider>
        </LocationContext.Provider>
      </Router>
    );
  }
}

export default App;
