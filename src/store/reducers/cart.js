const initialState = {
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const cloneCart = [...state.cart];
      const foundIndex = cloneCart.findIndex(
        (item) => item.product.id === action.payload.id
      );

      if (foundIndex === -1) {
        cloneCart.push({
          product: action.payload,
          quantity: 1,
        });
      } else {
        cloneCart[foundIndex].quantity++;
      }

      return {
        ...state,
        cart: cloneCart,
      };
    }
    case "UPDATE_QUANTITY_ITEM": {
      const cloneCart = [...state.cart];
      const foundIndex = cloneCart.findIndex(
        (item) => item.product.id === action.payload.id
      );

      if (foundIndex === -1) return state;

      if (action.payload.status) {
        cloneCart[foundIndex].quantity++;
      } else {
        if (cloneCart[foundIndex].quantity > 1)
          cloneCart[foundIndex].quantity--;
      }

      return {
        ...state,
        cart: cloneCart,
      };
    }
    case "DELETE_CART_ITEM":
      return {
        ...state,
        cart: [...state.cart].filter(
          (item) => item.product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;
