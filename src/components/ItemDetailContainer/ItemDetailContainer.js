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
const stamps = [
  {
    id: 0,
    title: 'Agricultura',
    imgUrl: 'https://i.imgur.com/j9FY7r7.jpg',
    origin: 'Argentina',
    desc: 'Una bella estampilla argentina mostrando un ambiente agreste.',
    price: 40,
    stock: 2,
  },
  {
    id: 1,
    title: 'Argentina en mapamundi',
    imgUrl: 'https://i.imgur.com/QKjm7Fv.jpg',
    origin: 'Argentina',
    desc: 'La Argentina vista desde un panorama planetario.',
    price: 100,
    stock: 7,
  },
  {
    id: 2,
    title: 'Flor: Begonia',
    imgUrl: 'https://i.imgur.com/edhAwje.jpg',
    origin: 'Argentina',
    desc: 'Una bella flor ilustrada.',
    price: 20,
    stock: 14,
  },
  {
    id: 3,
    title: 'Brontosaurio',
    imgUrl: 'https://i.imgur.com/gjlySm3.jpg',
    origin: 'Corea del Norte',
    desc:
      'Una muy bella estampsilla con temática prehistórica, emitida como parte de una colección en la década de los 90.',
    price: 200,
    stock: 4,
  },
];

const ItemDetailContainer = () => {
  const [promStatus, setPromStatus] = useState('Pending');
  const [fetchedStamps, setfetchedStamps] = useState([]);

  const emulateFetch = () => {
    let findItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        stamps ? resolve(stamps) : reject('No items available');
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
    console.log(fetchedStamps);
  };

  useEffect(() => {
    emulateFetch();
  }, []);

  return (
    <StyledItemDetailContainer>
      <ItemDetail status={promStatus} stamps={fetchedStamps} />
    </StyledItemDetailContainer>
  );
};

export default ItemDetailContainer;
