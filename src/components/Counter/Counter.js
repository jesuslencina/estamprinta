import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;

  p {
    font-size: 2rem;
    width: 3rem;
    text-align: center;
    margin: 0;
  }

  button {
    border-radius: 37px;
    border: none;
    font-size: 1.2rem;
    user-select: none;
    padding: 0.25rem 1rem;

    &:hover {
      cursor: pointer;
    }

    &:focus {
      outline: none;
    }
  }
`;

const Counter = ({ stock, initial, handleButton }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    handleButton(count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const addToAmount = () => {
    count < stock && setCount(count + 1);
  };

  const removeToAmount = () => {
    count > initial && setCount(count - 1);
  };

  return (
    <StyledCounter>
      <button onClick={removeToAmount} className="bg-primary">
        -
      </button>
      <p>{count}</p>
      <button onClick={addToAmount} className="bg-primary">
        +
      </button>
    </StyledCounter>
  );
};

export default Counter;
