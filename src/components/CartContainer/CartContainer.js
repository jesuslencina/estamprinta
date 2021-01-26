import React from 'react';
import styled from 'styled-components';

const StyledCartContainer = styled.section`
  background-color: #ede7d8;
  height: 100vh;
  padding-top: 6rem;

  h1 {
    text-align: center;
  }
`;

const CartContainer = () => {
  return (
    <StyledCartContainer>
      <h1>Nada por aquí aún :p</h1>
    </StyledCartContainer>
  );
};

export default CartContainer;
