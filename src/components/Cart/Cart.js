import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Bin from '../../assets/bin.svg';

const StyledCart = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0 0.25rem 1rem rgb(48 55 66 / 15%);
  width: 80%;
  height: fit-content;

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
  align-items: center;

  img {
    width: 5rem;
  }

  div {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    padding: 1rem 0;

    h4 {
      margin: 0;
    }

    i {
      color: darkgray;
    }

    .bin {
      margin: 0 0.5rem;
      width: 16px;
      align-self: flex-end;
      transition: transform 0.2s;
      &:hover {
        cursor: pointer;
        transform: scale(1.2);
      }
    }
  }
`;

const Cart = ({ context, stamps }) => {
  const getQuantity = () => {
    let amount = 0;
    context.cart.map((item) => (amount = amount + item.quantity));
    return amount;
  };

  const getTotal = () => {
    let total = 0;
    context.cart.map((item) => (total = total + item.price * item.quantity));
    return total;
  };

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
        <StyledCartList>
          {context.cart.map((item) => (
            <StyledCartItem key={item.id}>
              <img src={item.img} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <i>{item.quantity} unidades</i>
                <b>${item.price}</b>
                <img
                  src={Bin}
                  alt="Delete item"
                  className="bin"
                  onClick={() => context.removeItem(item.id)}
                />
              </div>
            </StyledCartItem>
          ))}
          <span className="h2">Cantidad de Items: {getQuantity()}</span>
          <span className="h2">Total: ${getTotal()}</span>
        </StyledCartList>
      )}
    </StyledCart>
  );
};

export default Cart;
