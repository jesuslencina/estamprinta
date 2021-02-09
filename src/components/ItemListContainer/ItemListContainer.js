import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/index';
import ItemList from '../ItemList/ItemList';

const StyledItemListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ede7d8;
  min-height: 100vh;
  padding-top: 10vh;

  @media screen and (max-width: 769px) {
    flex-direction: column;
    padding-top: 20vh;
    height: 100%;
  }
`;

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [displayingStamps, setDisplayingStamps] = useState();
  const categoryId = useParams();

  useEffect(() => {
    setLoading(true);
    let database = getFirestore();
    let query;

    if (categoryId.id) {
      query = database
        .collection('stamps')
        .where('category', '==', categoryId.id);
    } else {
      query = database.collection('stamps');
    }

    query.get().then((querySnapshot) => {
      let stampsArray = querySnapshot.docs.map((item) => {
        return {
          ...item.data(),
          id: item.id,
        };
      });
      setDisplayingStamps(stampsArray);
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <StyledItemListContainer>
      <ItemList
        loading={loading}
        stamps={displayingStamps}
        category={categoryId.id}
      />
    </StyledItemListContainer>
  );
};

export default ItemListContainer;
