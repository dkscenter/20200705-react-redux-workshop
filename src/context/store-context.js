import React from 'react';

export const store = {
    cart: {
        isOpen: false,
        products: [
            {
                productName: "Test1",
                productNumber: "01",
                amount: 1
            },
            {
                productName: "Test2",
                productNumber: "02",
                amount: 2
            }
        ]
    }
};
  
export const StoreContext = React.createContext({
    store,
});