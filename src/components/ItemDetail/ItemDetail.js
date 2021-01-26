import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Counter from '../Counter/Counter';

const StyledItemDetail = styled.div`
  display: flex;
  border: 1pt solid gray;
  width: 60%;
  background-color: white;

  @media screen and (max-width: 769px) {
    margin-top: 8vh;
    flex-direction: column;
    width: 95%;
  }
`;

const StyledItemDetailLeft = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 20rem;
  }

  @media screen and (max-width: 769px) {
    align-items: center;
    img {
      width: 75%;
    }
  }
`;

const StyledItemDetailRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 1rem;

  i {
    opacity: 0.65;
  }

  b {
    font-size: 2rem;
  }

  @media screen and (max-width: 769px) {
    align-items: center;
    padding: 1rem;
  }
`;

const ItemDetail = ({ status, stamps }) => {
  const itemId = useParams();
  const [currentStamp, setCurrentStamp] = useState([]);
  const [buttonVisibility, setButtonVisibility] = useState(false);

  const handleButton = (value) => {
    value > 0 ? setButtonVisibility(true) : setButtonVisibility(false);
  };

  useEffect(() => {
    let filtered = stamps.filter((stamp) => stamp.id.toString() === itemId.id);
    setCurrentStamp(filtered[0]);
  }, [itemId, stamps]);

  return (
    <>
      {status === 'Pending' ? (
        <h2>Promise: {status}</h2>
      ) : (
        stamps && (
          <StyledItemDetail>
            <StyledItemDetailLeft>
              <img src={currentStamp.imgUrl} alt={currentStamp.title} />
            </StyledItemDetailLeft>
            <StyledItemDetailRight>
              <h2>{currentStamp.title}</h2>
              <i>País: {currentStamp.origin}</i>
              <p>{currentStamp.desc}</p>
              <b>Precio: ${currentStamp.price}</b>
              <i>Stock: {currentStamp.stock}</i>
              <Counter
                initial={0}
                stock={currentStamp.stock}
                handleButton={handleButton}
              />

              <button
                className={`btn btn-primary ${!buttonVisibility && 'disabled'}`}
              >
                Agregar al Carrito
              </button>
            </StyledItemDetailRight>
          </StyledItemDetail>
        )
      )}
    </>
  );
};

export default ItemDetail;
