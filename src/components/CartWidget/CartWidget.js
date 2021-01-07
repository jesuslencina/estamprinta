import React from 'react';
import styled from 'styled-components';

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
    padding: 0.15rem 0.35rem;
    border-radius: 27px;
  }

  img {
    width: 30px;
    margin: 0 0.5rem;
    opacity: 0.65;
  }
`;

const CartWidget = ({ amount }) => {
  return (
    <StyledCartWidget>
      <img src="assets/cart.svg" alt="Carrito" />
      <span className="bg-primary">{amount}</span>
    </StyledCartWidget>
  );
};

export default CartWidget;
