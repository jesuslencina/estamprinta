import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const StyledItemDetailContainer = styled.div`
  padding-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ede7d8;
  height: 100vh;

  @media screen and (max-width: 769px) {
    height: 100%;
  }
`;

const ItemDetailContainer = ({ stamps }) => {
  const [selectedStamp, setSelectedStamp] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buttonVisibility, setButtonVisibility] = useState(false);
  const [count, setCount] = useState(0);
  const itemId = useParams();

  useEffect(() => {
    let filtered = stamps.filter((stamp) => stamp.id === itemId.id);
    setSelectedStamp(filtered[0]);
    setLoading(false);
  }, [itemId, stamps]);

  const handleButton = (value) => {
    value > 0 ? setButtonVisibility(true) : setButtonVisibility(false);
  };

  return (
    <StyledItemDetailContainer>
      <ItemDetail
        loading={loading}
        stamp={selectedStamp}
        handleButton={handleButton}
        buttonVisibility={buttonVisibility}
        count={count}
        setCount={setCount}
      />
    </StyledItemDetailContainer>
  );
};

export default ItemDetailContainer;
