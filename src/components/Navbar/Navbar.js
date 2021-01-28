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

  p,
  .navbar-brand {
    margin: 0;
  }

  .cart-section {
    height: fit-content;
  }

  @media screen and (max-width: 769px) {
    align-items: center;
    justify-content: center;

    .navbar-center {
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    .cart-section {
      width: 100%;
      justify-content: center !important;
    }
  }
`;

const categories = ['Todas', 'Argentina', 'Otros'];

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
        {categories.map((category) => {
          return (
            <NavLink
              key={category}
              to={`/category/${category.toLowerCase()}`}
              className="btn btn-link"
            >
              {category}
            </NavLink>
          );
        })}
      </section>

      <section className="navbar-section cart-section">
        <CartWidget />
      </section>
    </StyledNav>
  );
};

export default Navbar;
