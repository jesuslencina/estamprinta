import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

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
const stampsObject = [
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
      'Una muy bella estampilla con temática prehistórica, emitida como parte de una colección en la década de los 90.',
    price: 200,
    stock: 4,
  },
];

const ItemListContainer = () => {
  const [promStatus, setPromStatus] = useState('Pending');
  const [stamps, setStamps] = useState([]);
  const categoryId = useParams();

  useEffect(() => {
    const emulateFetch = () => {
      let findItems = new Promise((resolve, reject) => {
        setTimeout(() => {
          stampsObject.length
            ? resolve(stampsObject)
            : reject('No items available');
        }, 1000);
      });

      findItems
        .then((res) => {
          filterByCategory(res);
          setPromStatus('Success');
        })
        .catch((err) => {
          setPromStatus('Failed: ' + err);
        });
    };

    emulateFetch();

    const filterByCategory = (fetched) => {
      let filteredStamps;
      switch (categoryId.id) {
        case undefined:
          filteredStamps = fetched;
          break;

        case 'todas':
          filteredStamps = fetched;

          break;

        case 'argentina':
          filteredStamps = fetched.filter(
            (stamp) => stamp.origin === 'Argentina'
          );
          break;

        case 'otros':
          filteredStamps = fetched.filter(
            (stamp) => stamp.origin !== 'Argentina'
          );
          break;

        default:
          filteredStamps = fetched;
          break;
      }

      setStamps(filteredStamps);
    };
  }, [categoryId]);

  return (
    <StyledItemListContainer>
      <ItemList status={promStatus} stamps={stamps} />
    </StyledItemListContainer>
  );
};

export default ItemListContainer;
