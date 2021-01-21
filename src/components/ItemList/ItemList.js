import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Item from '../Item/Item';

const StyledItemList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
`;

const ItemList = ({ status, fetched }) => {
  return (
    <>
      <h1>Promise status: {status}</h1>
      <StyledItemList>
        {status === 'Success' &&
          fetched?.map((item) => (
            <Link to={`/item/${item.id}`} key={item.id}>
              <Item
                title={item.title}
                desc={item.desc}
                price={item.price}
                imgUrl={item.imgUrl}
              />
            </Link>
          ))}
      </StyledItemList>
    </>
  );
};

export default ItemList;
