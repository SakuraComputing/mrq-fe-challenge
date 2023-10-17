import { NavLink } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='list'>
        <li className='list-item'>
          <NavLink className={({ isActive }) => (isActive ? 'list-link-active' : 'list-link')} to="/">Dashboard</NavLink>
        </li>
        <li className='list-item'>
          <NavLink className={({ isActive }) => (isActive ? 'list-link-active' : 'list-link')} to="/profile">Profile</NavLink>
        </li>
        <li className='list-item'>
          <NavLink className={({ isActive }) => (isActive ? 'list-link-active' : 'list-link')} to="/statements">Statements</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
