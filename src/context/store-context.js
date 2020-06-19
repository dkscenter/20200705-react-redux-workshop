import React from 'react';

export const store = {
    cart: {
        isOpen: false
    }
};
  
export const StoreContext = React.createContext({
    store,
});