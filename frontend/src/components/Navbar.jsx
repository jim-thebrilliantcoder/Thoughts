import { NavLink } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Services' }
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <NavLink to="/" className="navbar-brand">
          Company<span>&nbsp;Name</span>
        </NavLink>
        <nav className="navbar-links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                isActive ? 'navbar-link is-active' : 'navbar-link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
