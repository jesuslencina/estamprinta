import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import CartWidget from '../CartWidget/CartWidget';

const StyledNav = styled.header`
  padding: 1rem;
  border-bottom: 1pt solid black;
  position: fixed;
  width: 100%;
  background-color: white;

  img {
    width: 30px;
    margin: 0.5rem;
  }

  section {
    display: flex;
    align-items: center;
  }

  .navbar-brand {
    margin: 0;
  }

  @media screen and (max-width: 769px) {
    align-items: center;
    justify-content: center;

    .navbar-section {
      align-items: center;
      justify-content: center;
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNav className="navbar">
      <NavLink to="/">
        <section className="navbar-section">
          <img src={Logo} alt="Logo" />
          <p className="navbar-brand mr-2 text-dark">ESTAMPRINTAS</p>
        </section>
      </NavLink>
      <section className="navbar-center">
        <a href="..." className="btn btn-link ">
          TODAS
        </a>
        <a href="..." className="btn btn-link">
          Argentina
        </a>
        <a href="..." className="btn btn-link">
          Otros países
        </a>
      </section>

      <section className="navbar-section">
        <div className="input-group input-inline">
          <input
            className="form-input"
            type="text"
            placeholder="término a buscar"
          />
          <button className="btn btn-primary input-group-btn">Buscar</button>
          <CartWidget amount={8} />
        </div>
      </section>
    </StyledNav>
  );
};

export default Navbar;
