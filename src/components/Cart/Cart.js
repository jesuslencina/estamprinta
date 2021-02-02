import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledCart = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0 0.25rem 1rem rgb(48 55 66 / 15%);
  width: 80%;
  height: 90%;

  h1 {
    margin: 2rem;
  }

  .no-items {
    color: gray;
    margin: auto 0;

    button {
      width: 100%;
    }
  }
`;

const StyledCartList = styled.section`
  display: flex;
  flex-direction: column;
  border: 1pt solid black;
`;

const StyledCartItem = styled.article`
  display: flex;
`;

const Cart = ({ context }) => {
  return (
    <StyledCart>
      <h1>Carrito</h1>
      {context.cart.length === 0 ? (
        <div className="no-items">
          <h2>No hay items para mostrar.</h2>
          <Link to="/">
            <button className="btn btn-primary">Volver</button>
          </Link>
        </div>
      ) : (
        <p></p>
      )}
    </StyledCart>
  );
};

export default Cart;
