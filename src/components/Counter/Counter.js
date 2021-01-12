import React, { useState } from 'react';
import styled from 'styled-components';

const StyledCounter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h2 {
    font-size: 8rem;
  }

  .modify-buttons {
    display: flex;
    width: 20%;
    justify-content: space-between;
    span {
      border-radius: 27px;
      font-size: 4rem;
      padding: 2rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const Counter = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const addToAmount = () => {
    count < stock && setCount(count + 1);
  };

  const removeToAmount = () => {
    count > initial && setCount(count - 1);
  };

  return (
    <StyledCounter>
      <h2>{count}</h2>
      <div className="modify-buttons">
        <span onClick={removeToAmount} className="bg-primary">
          -
        </span>
        <span onClick={addToAmount} className="bg-primary">
          +
        </span>
      </div>
    </StyledCounter>
  );
};

export default Counter;
