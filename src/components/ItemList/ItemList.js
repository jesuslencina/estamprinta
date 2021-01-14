import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Item from '../Item/Item';

const StyledItemList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
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

const ItemList = () => {
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
        console.log('ITEMS FOUND! ', res);
        setfetchedStamps(res);
        setPromStatus('Success');
      })
      .catch((err) => {
        console.log('There was an error: ', err);
        setPromStatus('Failed');
      });
  };

  useEffect(() => {
    emulateFetch();
  }, []);

  return (
    <>
      <h1>Promise status: {promStatus}</h1>
      <StyledItemList>
        {promStatus === 'Success' &&
          fetchedStamps.map((item) => (
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
