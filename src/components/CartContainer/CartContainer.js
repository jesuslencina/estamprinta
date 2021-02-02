import React, { useContext } from 'react';
import styled from 'styled-components';
import Cart from '../Cart/Cart';
import { CartContext } from '../../context/Context';

const StyledCartContainer = styled.section`
  background-color: #ede7d8;
  height: 100vh;
  padding-top: 6rem;
  display: flex;
  justify-content: center;
`;

const CartContainer = () => {
  const context = useContext(CartContext);

  return (
    <StyledCartContainer>
      <Cart context={context} />
    </StyledCartContainer>
  );
};

export default CartContainer;
