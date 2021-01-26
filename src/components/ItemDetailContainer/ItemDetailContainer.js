import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const StyledItemDetailContainer = styled.div`
  padding-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ede7d8;
  height: 100vh;

  @media screen and (max-width: 769px) {
    height: 100%;
  }
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
      'Una muy bella estampilla con temática prehistórica, emitida como parte de una colección en la década de los 90.',
    price: 200,
    stock: 4,
  },
];

const ItemDetailContainer = () => {
  const [promStatus, setPromStatus] = useState('Pending');
  const [fetchedStamp, setfetchedStamp] = useState([]);
  const [buttonVisibility, setButtonVisibility] = useState(false);
  const itemId = useParams();

  useEffect(() => {
    const emulateFetch = () => {
      let findItems = new Promise((resolve, reject) => {
        setTimeout(() => {
          stamps ? resolve(stamps) : reject('No items available');
        }, 2000);
      });

      findItems
        .then((res) => {
          let filtered = res.filter(
            (stamp) => stamp.id.toString() === itemId.id
          );
          setfetchedStamp(filtered[0]);
          setPromStatus('Success');
        })
        .catch((err) => {
          setPromStatus('Failed: ' + err);
        });
    };
    emulateFetch();
  }, [itemId, fetchedStamp]);

  const handleButton = (value) => {
    value > 0 ? setButtonVisibility(true) : setButtonVisibility(false);
  };

  return (
    <StyledItemDetailContainer>
      <ItemDetail
        status={promStatus}
        stamp={fetchedStamp}
        handleButton={handleButton}
        buttonVisibility={buttonVisibility}
      />
    </StyledItemDetailContainer>
  );
};

export default ItemDetailContainer;
