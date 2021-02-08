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

  const addItem = (stamp, quantity) => {
    if (cart.filter((element) => element.id === stamp.id).length === 0) {
      setCart([
        ...cart,
        {
          id: stamp.id,
          title: stamp.title,
          img: stamp.img,
          price: stamp.price,
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
