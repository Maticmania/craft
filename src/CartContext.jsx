import React, { createContext, useReducer, useContext, useEffect } from 'react';

const CartContext = createContext();

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
};

const cartReducer = (state, action) => {
  let updatedCart;
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        updatedCart = state.cart.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedCart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
      break;
    case 'INCREASE_QUANTITY':
      updatedCart = state.cart.map(item =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );
      break;
    case 'DECREASE_QUANTITY':
      updatedCart = state.cart
        .map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0);
      break;
    case 'REMOVE_FROM_CART':
      updatedCart = state.cart.filter(item => item.id !== action.payload);
      break;
    case 'CLEAR_CART':
      updatedCart = [];
      break;
    default:
      return state;
  }
  
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  return { ...state, cart: updatedCart };
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
