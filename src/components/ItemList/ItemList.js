import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Item from '../Item/Item';

const StyledItemList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
  position: relative;

  h2 {
    position: absolute;
    left: 2rem;
    top: 0;
  }

  @media screen and (max-width: 769px) {
    grid-template-columns: 1fr;
  }
`;

const ItemList = ({ loading, stamps, category }) => {
  return (
    <StyledItemList>
      {loading ? (
        <div className="loading loading-lg"></div>
      ) : (
        <>
          <h2>{category ? category.toUpperCase() : 'Todas'}</h2>
          {stamps?.map((item) => {
            return (
              <Link to={`/item/${item.id}`} key={item.id}>
                <Item
                  id={item.id}
                  title={item.title}
                  category={item.category}
                  price={item.price}
                  img={item.img}
                />
              </Link>
            );
          })}
        </>
      )}
    </StyledItemList>
  );
};

export default ItemList;
