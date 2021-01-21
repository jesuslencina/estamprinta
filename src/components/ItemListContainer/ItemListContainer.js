import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ItemList from '../ItemList/ItemList';

const StyledItemListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ede7d8;
  height: 100vh;

  @media screen and (max-width: 769px) {
    flex-direction: column;
    padding-top: 20vh;
    height: 100%;
  }
`;

//!JUST A DUMMY TEST ARRAY
const stamps = [
  {
    id: 0,
    title: 'Agricultura',
    desc: 'Argentina',
    price: 40,
    imgUrl: 'https://i.imgur.com/j9FY7r7.jpg',
  },
  {
    id: 1,
    title: 'Argentina en mapamundi',
    desc: 'Argentina',
    price: 100,
    imgUrl: 'https://i.imgur.com/QKjm7Fv.jpg',
  },
  {
    id: 2,
    title: 'Flor: Begonia',
    desc: 'Argentina',
    price: 20,
    imgUrl: 'https://i.imgur.com/edhAwje.jpg',
  },
  {
    id: 3,
    title: 'Brontosaurio',
    desc: 'Corea del Norte',
    price: 200,
    imgUrl: 'https://i.imgur.com/gjlySm3.jpg',
  },
];

const ItemListContainer = () => {
  const [promStatus, setPromStatus] = useState('Pending');
  const [fetchedStamps, setfetchedStamps] = useState([]);

  const emulateFetch = () => {
    let findItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        stamps.length ? resolve(stamps) : reject('No items available');
      }, 2000);
    });

    findItems
      .then((res) => {
        setfetchedStamps(res);
        setPromStatus('Success');
      })
      .catch((err) => {
        setPromStatus('Failed: ' + err);
      });
  };

  useEffect(() => {
    emulateFetch();
  }, []);

  return (
    <StyledItemListContainer>
      <ItemList status={promStatus} fetched={fetchedStamps} />
    </StyledItemListContainer>
  );
};

export default ItemListContainer;
