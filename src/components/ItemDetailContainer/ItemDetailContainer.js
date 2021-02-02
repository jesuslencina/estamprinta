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

const ItemDetailContainer = ({ stamps }) => {
  const [promStatus, setPromStatus] = useState('Pending');
  const [fetchedStamp, setfetchedStamp] = useState([]);
  const [buttonVisibility, setButtonVisibility] = useState(false);
  const [count, setCount] = useState(0);
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
  }, [itemId, fetchedStamp, stamps]);

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
        count={count}
        setCount={setCount}
      />
    </StyledItemDetailContainer>
  );
};

export default ItemDetailContainer;
