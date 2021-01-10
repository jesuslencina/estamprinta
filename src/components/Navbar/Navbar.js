import styled from 'styled-components';

import CartWidget from '../CartWidget/CartWidget';

const StyledNav = styled.header`
  padding: 1rem;
  border-bottom: 1pt solid black;

  img {
    width: 30px;
    margin: 0.5rem;
  }

  section {
    display: flex;
    align-items: center;
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
      <section className="navbar-section">
        <img src="assets/logo.svg" alt="Logo" />
        <a href="..." className="navbar-brand mr-2 text-dark">
          ESTAMPRINTAS
        </a>
      </section>

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
