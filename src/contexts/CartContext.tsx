import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, cartItems: [...state.cartItems, action.item] };
    case 'REMOVE_ITEM':
      return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.id) };
    case 'UPDATE_QUANTITY':
      return { 
        ...state, 
        cartItems: state.cartItems.map(item => 
          item.id === action.id ? { ...item, quantity: action.quantity } : item
        )
      };
    case 'CLEAR_CART':
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  const addItem = (item) => dispatch({ type: 'ADD_ITEM', item });
  const removeItem = (id) => dispatch({ type: 'REMOVE_ITEM', id });
  const updateQuantity = (id, quantity) => dispatch({ type: 'UPDATE_QUANTITY', id, quantity });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
