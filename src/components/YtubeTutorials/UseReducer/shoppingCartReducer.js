export const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export function shoppingCartReducer(state, action) {
  // Action has two parts:
  // action.type: A string that indicates the type of action to perform (e.g., "ADD_ITEM" or "REMOVE_ITEM").
  // action.payload: The data that needs to be updated in the state (e.g., the item to add or the index of the item to remove).

  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };
    case "REMOVE_ITEM":
      const newCart = state.cart.filter((_, index) => index !== action.payload);
      const removedItem = state.cart[action.payload];
      return {
        ...state,
        cart: newCart,
        totalQuantity: state.totalQuantity - 1,
        totalPrice: state.totalPrice - removedItem.price,
      };
    default:
      return state;
  }
}

// NOTE FROM GPT
// React useReducer Hook

// The useReducer hook is an alternative to useState for managing complex state logic in React components. It is particularly useful when the next state depends on the previous state or when dealing with multiple sub-values.

// When to Use useReducer?

// When state transitions involve multiple sub-values.

// When state logic is complex.

// When the next state depends on the previous state.

// When using Redux-like patterns in a local component.

// Advantages of useReducer:

// Centralizes state logic in one function.

// Easier debugging with predictable state transitions.

// Avoids excessive re-renders compared to multiple useState updates.

// Conclusion:

// useReducer is a powerful hook for managing complex state in React components. It improves code organization and readability, especially in scenarios requiring structured state transitions.
