import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getFirestore } from '../../firebase/index';
import { Link, useParams } from 'react-router-dom';

const StyledOrderView = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #ede7d8;
`;

const Styled404 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .btn {
    width: 100%;
  }
`;

const StyledOrder = styled.div`
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 2rem;
  box-shadow: 0 0.25rem 1rem rgb(48 55 66 / 15%);

  h2 {
    margin: 1rem 0;
  }
`;

const OrderView = () => {
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState();
  const orderId = useParams();

  useEffect(() => {
    const database = getFirestore();
    const stampDatabase = database.collection('orders');
    const stamp = stampDatabase.doc(orderId.id);
    stamp
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log('No existe');
          setSelectedOrder(404);
          return;
        }
        setSelectedOrder({ ...doc.data() });
      })
      .catch((error) => console.log('Error: ' + error))
      .finally(() => setLoading(false));
  }, [orderId]);

  return (
    <StyledOrderView>
      {loading ? (
        <div className="loading loading-lg"></div>
      ) : selectedOrder === 404 ? (
        <Styled404>
          <h1>404</h1>
          <h2>Orden no encontrada.</h2>
          <Link className="btn btn-primary" to="/">
            Volver
          </Link>
        </Styled404>
      ) : (
        <StyledOrder>
          <h1>Datos de la compra</h1>
          <i>ID: {orderId.id}</i>
          <div>
            <h2>Cliente</h2>
            <p>
              Nombre:{' '}
              {selectedOrder.buyer.name + ' ' + selectedOrder.buyer.surname}
            </p>
            <p>Teléfono: {selectedOrder.buyer.phone}</p>
            <p>Correo electrónico: {selectedOrder.buyer.email}</p>
          </div>
          <div>
            <h2>Compra</h2>
            <ul>
              {selectedOrder.items.map((item) => (
                <li key={item.title}>
                  {item.title} x{item.quantity} (${item.price} c/u)
                </li>
              ))}
            </ul>
            <h3>Total: ${selectedOrder.total}</h3>
          </div>
          <Link className="btn btn-primary" to="/">
            Volver
          </Link>
        </StyledOrder>
      )}
    </StyledOrderView>
  );
};

export default OrderView;
