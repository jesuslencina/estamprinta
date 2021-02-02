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
  align-items: center;
  border: 1pt solid pink;
  img {
    width: 10rem;
  }

  div {
    display: flex;
    flex-flow: column wrap;

    i {
      color: darkgray;
    }

    .bin {
      width: 24px;
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
  console.log(context.cart);

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
              <img src={stamps[item.id].imgUrl} alt={stamps[item.id].title} />
              <div>
                <h4>{stamps[item.id].title}</h4>
                <i>{item.quantity} unidades</i>
                <b>${stamps[item.id].price}</b>
                <img
                  src={Bin}
                  alt="Delete item"
                  className="bin"
                  onClick={() => context.removeItem(item.id)}
                />
              </div>
            </StyledCartItem>
          ))}
        </StyledCartList>
      )}
    </StyledCart>
  );
};

export default Cart;
