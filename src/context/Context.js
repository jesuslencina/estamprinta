import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (cart.filter((element) => element.item === item).length === 0) {
      setCart([
        ...cart,
        {
          item: item,
          quantity: quantity,
        },
      ]);
    }
  };

  const removeItem = (item) => {
    let cartWithoutIt = cart.filter((element) => element.item !== item);
    setCart(cartWithoutIt);
  };

  const clearAll = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearAll }}>
      {props.children}
    </CartContext.Provider>
  );
};
