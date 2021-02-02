import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  // GET LOCAL STORAGE ON LOAD
  useEffect(() => {
    if (localStorage.getItem('estamprintasCart') !== null) {
      setCart(JSON.parse(localStorage.getItem('estamprintasCart')));
    }
  }, []);

  // UPDATE LOCAL STORAGE ON CHANGE
  useEffect(() => {
    localStorage.setItem('estamprintasCart', JSON.stringify(cart));
  }, [cart]);

  const addItem = (id, item, quantity) => {
    if (cart.filter((element) => element.id === id).length === 0) {
      setCart([
        ...cart,
        {
          id: id,
          item: item,
          quantity: quantity,
        },
      ]);
    }
  };

  const removeItem = (id) => {
    let cartWithoutIt = cart.filter((element) => element.id !== id);
    setCart(cartWithoutIt);
  };

  const clearAll = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearAll }}>
      {props.children}
    </CartContext.Provider>
  );
};
