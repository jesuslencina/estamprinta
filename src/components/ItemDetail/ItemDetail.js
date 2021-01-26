import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  width: 100%;

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

const ItemDetail = ({ status, stamp, handleButton, buttonVisibility }) => {
  return (
    <>
      {status === 'Pending' ? (
        <h2>Promise: {status}</h2>
      ) : (
        stamp && (
          <StyledItemDetail>
            <StyledItemDetailLeft>
              <img src={stamp.imgUrl} alt={stamp.title} />
            </StyledItemDetailLeft>
            <StyledItemDetailRight>
              <h2>{stamp.title}</h2>
              <i>País: {stamp.origin}</i>
              <p>{stamp.desc}</p>
              <b>Precio: ${stamp.price}</b>
              <i>Stock: {stamp.stock}</i>
              <Counter
                initial={0}
                stock={stamp.stock}
                handleButton={handleButton}
              />

              <Link
                to="/cart"
                className={`btn btn-primary ${!buttonVisibility && 'disabled'}`}
              >
                Agregar al Carrito
              </Link>
            </StyledItemDetailRight>
          </StyledItemDetail>
        )
      )}
    </>
  );
};

export default ItemDetail;
