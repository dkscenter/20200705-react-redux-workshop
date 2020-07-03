import React from 'react';

let localCart = localStorage.getItem('cart');
export const store = {
    cart: {
        isOpen: false,
        isAnimate: false,
        products: localCart ? JSON.parse(localCart) : []
    }
};
  
export const StoreContext = React.createContext({
    store,
});