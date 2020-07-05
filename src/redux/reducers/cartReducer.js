const initState = {
  products: localStorage.getItem("CART_PRODUCT")
    ? JSON.parse(localStorage.getItem("CART_PRODUCT"))
    : [],
  totalPrice: 0,
};

export default function reducer(state = initState, action) {
  if (action.type === "ADD_CART") {
    let productIndex = state.products.findIndex((item) => {
      return item.productNumber === action.product.productNumber;
    });
    let products;
    if (productIndex > -1) {
      state.products[productIndex].amount =
        state.products[productIndex].amount + 1;
      products = state.products;
    } else {
      products = [...state.products, action.product];
    }
    localStorage.setItem("CART_PRODUCT", JSON.stringify(products));
    return {
      ...state,
      products: products,
    };
  }

  return state;
}
