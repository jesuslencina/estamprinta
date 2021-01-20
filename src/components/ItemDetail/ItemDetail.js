import React from 'react';
import styled from 'styled-components';

import Counter from '../Counter/Counter';

const StyledItemDetail = styled.div`
  display: flex;
  border: 1pt solid gray;
  width: 60%;
`;

const StyledItemDetailLeft = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 20rem;
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
`;

const ItemDetail = ({ status, stamp }) => {
  return (
    <>
      {status === 'Pending' ? (
        <h2>Promise: {status}</h2>
      ) : (
        <StyledItemDetail>
          <StyledItemDetailLeft>
            <img src={stamp.imgUrl} alt={stamp.name} />
          </StyledItemDetailLeft>
          <StyledItemDetailRight>
            <h2>{stamp.title}</h2>
            <i>País: {stamp.origin}</i>
            <p>{stamp.desc}</p>
            <b>Precio: ${stamp.price}</b>
            <i>Stock: {stamp.stock}</i>
            <Counter initial={1} stock={stamp.stock} />
            <button className="btn btn-primary">Agregar al Carrito</button>
          </StyledItemDetailRight>
        </StyledItemDetail>
      )}
    </>
  );
};

export default ItemDetail;
