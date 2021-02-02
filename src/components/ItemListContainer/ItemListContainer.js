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

const ItemListContainer = ({ stampsObject }) => {
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
