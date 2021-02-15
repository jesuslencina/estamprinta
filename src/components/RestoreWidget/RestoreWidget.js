import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import RestoreIcon from '../../assets/mark.svg';

const StyledRestoreWidget = styled.div`
  align-items: center;
  justify-content: center;
  height: 20px;

  #icon {
    width: 23px;
    opacity: 0.8;
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledModal = styled.div`
  input {
    width: 100%;
    margin-bottom: 1rem;
  }

  #search {
    width: 100%;
  }

  #cancel {
    width: 100%;
    margin: 1rem 0 0.2rem;
  }
`;

const RestoreWidget = () => {
  const [modal, setModal] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const orderInput = useRef();

  console.log(orderInput);

  const goToOrder = () => {
    if (orderInput.current.value) {
      setRedirect(true);
      setModal(false);
      setTimeout(() => {
        setRedirect(false);
      }, 1000);
    }
  };

  return (
    <>
      <StyledRestoreWidget onClick={() => setModal(true)}>
        <img id="icon" src={RestoreIcon} alt="Restaurar compra" />
      </StyledRestoreWidget>

      <StyledModal className={`modal ${modal ? 'active' : ''}`}>
        <div className="modal-overlay" onClick={() => setModal(false)}></div>
        <div className="modal-container">
          <div className="modal-body">
            <h3>
              Para recuperar datos de su compra, ingrese el ID de la misma:
            </h3>
            <input type="text" ref={orderInput} />
            <button id="search" className="btn btn-primary" onClick={goToOrder}>
              Buscar
            </button>
            <p
              id="cancel"
              className="btn btn-link"
              onClick={() => setModal(false)}
            >
              Cancelar
            </p>
          </div>
        </div>
      </StyledModal>
      {redirect && <Redirect to={`/order/${orderInput.current.value}`} />}
    </>
  );
};

export default RestoreWidget;
