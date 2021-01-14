import React from 'react';
import styled from 'styled-components';

import ItemList from '../ItemList/ItemList';

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
      <ItemList />
    </StyledItemListContainer>
  );
};

export default ItemListContainer;
