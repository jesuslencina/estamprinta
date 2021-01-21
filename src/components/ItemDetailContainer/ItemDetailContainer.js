import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ItemDetail from '../ItemDetail/ItemDetail';

const StyledItemDetailContainer = styled.div`
  padding-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ede7d8;
  height: 100vh;
`;

//!DUMMY
const stamp = {
  id: 3,
  title: 'Brontosaurio',
  imgUrl: 'https://i.imgur.com/gjlySm3.jpg',
  origin: 'Corea del Norte',
  desc:
    'Una muy bella estampilla con temática prehistórica, emitida como parte de una colección en la década de los 90.',
  price: 200,
  stock: 4,
};

const ItemDetailContainer = () => {
  const [promStatus, setPromStatus] = useState('Pending');
  const [fetchedStamp, setfetchedStamp] = useState([]);

  const emulateFetch = () => {
    let findItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        stamp ? resolve(stamp) : reject('No items available');
      }, 2000);
    });

    findItems
      .then((res) => {
        console.log('ITEMS FOUND! ', res);
        setfetchedStamp(res);
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
    <StyledItemDetailContainer>
      <ItemDetail status={promStatus} stamp={fetchedStamp} />
    </StyledItemDetailContainer>
  );
};

export default ItemDetailContainer;
