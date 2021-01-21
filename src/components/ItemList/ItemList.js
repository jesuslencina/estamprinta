import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Item from '../Item/Item';

const StyledItemList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  padding: 2rem;

  @media screen and (max-width: 769px) {
    grid-template-columns: 1fr;
  }
`;

const ItemList = ({ status, stamps }) => {
  return (
    <>
      {status === 'Pending' ? (
        <h2>Promise: {status}</h2>
      ) : (
        <StyledItemList>
          {stamps?.map((item) => (
            <Link to={`/item/${item.id}`} key={item.id}>
              <Item
                title={item.title}
                origin={item.origin}
                price={item.price}
                imgUrl={item.imgUrl}
              />
            </Link>
          ))}
        </StyledItemList>
      )}
    </>
  );
};

export default ItemList;
