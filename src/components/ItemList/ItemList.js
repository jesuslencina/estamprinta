import React from 'react';
import styled from 'styled-components';

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
            <Item
              key={item.id}
              title={item.title}
              desc={item.desc}
              price={item.price}
              imgUrl={item.imgUrl}
            />
          ))}
      </StyledItemList>
    </>
  );
};

export default ItemList;
