import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  .form-item {
    display: flex;
    flex-direction: column;
    margin: 0.25rem 0;
  }

  button {
    margin: 0.5rem 0;
  }
`;

const Form = ({ setUserInfo }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formData.name === '' ||
      formData.surname === '' ||
      formData.phone === '' ||
      formData.email === '' ||
      formData.emailVerification === ''
    ) {
      alert('Llená todos los campos.');
    } else {
      if (formData.email !== formData.emailVerification) {
        alert('Verifica que tu correo electrónico coincida en ambas casillas.');
      } else {
        setUserInfo(formData);
      }
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    emailVerification: '',
  });

  return (
    <StyledForm>
      <h2>Datos de compra</h2>
      <div className="form-item">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-item">
        <label htmlFor="surname">Apellido</label>
        <input
          type="text"
          id="surname"
          value={formData.surname}
          onChange={handleChange}
        />
      </div>
      <div className="form-item">
        <label htmlFor="phone">Teléfono</label>
        <input
          type="text"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="form-item">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-item">
        <label htmlFor="emailVerification">Repetí tu e-mail</label>
        <input
          type="email"
          id="emailVerification"
          value={formData.emailVerification}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Comprar
      </button>
    </StyledForm>
  );
};

export default Form;
