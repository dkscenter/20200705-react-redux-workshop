import { combineReducers } from "redux";
import user from "./userReducer";
import cart from "./cartReducer";

/*
{
    user: {
        number: 0,
        firstName: "Komphet",
        lastName: "Meesab",
    },
    cart: {
        products: [],
        totalPrice: 0
    }
}


*/

export default combineReducers({
  user,
  cart,
});
