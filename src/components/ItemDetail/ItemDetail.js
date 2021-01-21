import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Counter from '../Counter/Counter';

const StyledItemDetail = styled.div`
  display: flex;
  border: 1pt solid gray;
  width: 60%;
  background-color: white;
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

const ItemDetail = ({ status, stamps }) => {
  const itemId = useParams();

  useEffect(() => {
    console.log(itemId);
  }, [itemId]);

  return (
    <>
      {status === 'Pending' ? (
        <h2>Promise: {status}</h2>
      ) : (
        stamps && (
          <StyledItemDetail>
            <StyledItemDetailLeft>
              <img
                src={stamps[itemId.id].imgUrl}
                alt={stamps[itemId.id].name}
              />
            </StyledItemDetailLeft>
            <StyledItemDetailRight>
              <h2>{stamps[itemId.id].title}</h2>
              <i>País: {stamps[itemId.id].origin}</i>
              <p>{stamps[itemId.id].desc}</p>
              <b>Precio: ${stamps[itemId.id].price}</b>
              <i>Stock: {stamps[itemId.id].stock}</i>
              <Counter initial={1} stock={stamps[itemId.id].stock} />
              <button className="btn btn-primary">Agregar al Carrito</button>
            </StyledItemDetailRight>
          </StyledItemDetail>
        )
      )}
    </>
  );
};

export default ItemDetail;
