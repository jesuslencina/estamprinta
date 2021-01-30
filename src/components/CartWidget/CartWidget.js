import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../context/Context';
import Cart from '../../assets/cart.svg';

const StyledCartWidget = styled.div`
  align-items: center;
  justify-content: center;
  height: 20px;
  position: relative;

  span {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 0.75rem;
    padding: 0 0.35rem;
    border-radius: 27px;
  }

  img {
    width: 30px;
  }
`;

const CartWidget = () => {
  const context = useContext(CartContext);

  return (
    <StyledCartWidget>
      <img src={Cart} alt="Carrito" />
      {context.cart.length > 0 && (
        <span className="bg-primary">{context.cart.length}</span>
      )}
    </StyledCartWidget>
  );
};

export default CartWidget;
