import React from "react";
import NavComponent from "./components/NavComponent";
import SidebarComponent from "./components/SidebarComponent";
import CategoryComponent from "./components/CategoryComponent";
import ProductComponent from "./components/ProductComponent";
import AppContainer from "./containers/AppContainer";
import UserComponent from './components/UserComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
    // this.__toggleSidebar = this.__toggleSidebar.bind(this)
  }

  __toggleSidebar = () => {
    this.setState({
      open: this.state.open ? false : true,
    });
  };

  render() {
    return (
      <AppContainer>
        <Router>
          <div className="delivery">
            <NavComponent toggleSidebar={this.__toggleSidebar} />
            <SidebarComponent
              toggleSidebar={this.__toggleSidebar}
              open={this.state.open}
            >
              <div className="delivery-container">
                <Switch>
                  <Route path="/category/:id">
                    <ProductComponent />
                  </Route>
                  <Route path="/category">
                    <CategoryComponent />
                  </Route>
                  <Route path="/profile">
                    <UserComponent />
                  </Route>
                  <Route path="/">
                    <Redirect to="/category" />
                  </Route>
                </Switch>
              </div>
            </SidebarComponent>
          </div>
        </Router>
      </AppContainer>
    );
  }
}

export default App;
