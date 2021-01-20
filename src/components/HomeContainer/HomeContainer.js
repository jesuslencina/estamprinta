import React from 'react';
import styled from 'styled-components';

//import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const StyledHomeContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeContainer = () => {
  return (
    <StyledHomeContainer>
      <ItemDetailContainer />
    </StyledHomeContainer>
  );
};

export default HomeContainer;
