import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const Item = ({ title, origin, price, imgUrl }) => {
  return (
    <StyledCard className="card">
      <div className="card-image">
        <img src={imgUrl} alt={title} className="img-responsive" />
      </div>
      <div className="card-header">
        <div className="card-title h5">{title}</div>
        <div className="card-subtitle text-gray">${price}</div>
      </div>
      <div className="card-body">{origin}</div>
      <div className="card-footer">
        <button className="btn btn-primary">Comprar</button>
      </div>
    </StyledCard>
  );
};

export default Item;
