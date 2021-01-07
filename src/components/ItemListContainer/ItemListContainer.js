import React from 'react';
import styled from 'styled-components';

const StyledItemListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ede7d8;
  height: 100vh;
`;

const ItemListContainer = ({ greeting }) => {
  return (
    <StyledItemListContainer>
      <h1>{greeting}</h1>
    </StyledItemListContainer>
  );
};

export default ItemListContainer;
