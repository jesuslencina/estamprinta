import styled from 'styled-components';

const StyledNav = styled.header`
  padding: 1rem;
  border-bottom: 2pt solid black;
`;

function Navbar() {
  return (
    <StyledNav className="navbar">
      <section className="navbar-section">
        <a href="..." className="navbar-brand mr-2">
          ESTAMPRINTAS
        </a>
      </section>
      <section className="navbar-section">
        <a href="..." className="btn btn-link">
          Todas las estampillas
        </a>
        <a href="..." className="btn btn-link">
          Carrito
        </a>
        <div className="input-group input-inline">
          <input
            className="form-input"
            type="text"
            placeholder="término a buscar"
          />
          <button className="btn btn-primary input-group-btn">Buscar</button>
        </div>
      </section>
    </StyledNav>
  );
}

export default Navbar;
