import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <NavLink to={'/'} className={(nav) => (nav.isActive ? 'nav-active' : '')}>
            Accueil
          </NavLink>
          <NavLink to={'/coup-de-coeur'} className={(nav) => (nav.isActive ? 'nav-active' : '')}>
            Coup de coeur
          </NavLink>
        </ul>
      </nav>
      <h1>React Movies</h1>
    </div>
  );
};

export default Header;
