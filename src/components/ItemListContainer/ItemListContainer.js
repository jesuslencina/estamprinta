import React from 'react';
import styled from 'styled-components';
import Counter from '../Counter/Counter';

const StyledItemListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ede7d8;
  height: 100vh;
`;

const ItemListContainer = () => {
  return (
    <StyledItemListContainer>
      <Counter stock={7} initial={1} />
    </StyledItemListContainer>
  );
};

export default ItemListContainer;
