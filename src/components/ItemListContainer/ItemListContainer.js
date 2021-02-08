import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import ItemList from '../ItemList/ItemList';

const StyledItemListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ede7d8;
  min-height: 100vh;
  padding-top: 10vh;

  @media screen and (max-width: 769px) {
    flex-direction: column;
    padding-top: 20vh;
    height: 100%;
  }
`;

const ItemListContainer = ({ stamps, loading }) => {
  const [displayingStamps, setDisplayingStamps] = useState(stamps);
  const categoryId = useParams();

  useEffect(() => {
    let filteredStamps;
    switch (categoryId.id) {
      case undefined:
        filteredStamps = stamps;
        break;

      case 'todas':
        filteredStamps = stamps;

        break;

      case 'argentina':
        filteredStamps = stamps.filter((stamp) => stamp.origin === 'Argentina');
        break;

      case 'otros':
        filteredStamps = stamps.filter((stamp) => stamp.origin !== 'Argentina');
        break;

      default:
        filteredStamps = stamps;
        break;
    }

    setDisplayingStamps(filteredStamps);
  }, [categoryId, stamps]);

  return (
    <StyledItemListContainer>
      <ItemList loading={loading} stamps={displayingStamps} />
    </StyledItemListContainer>
  );
};

export default ItemListContainer;
