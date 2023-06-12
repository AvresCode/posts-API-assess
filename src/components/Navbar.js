import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/" className="navbar-links">
        Home
      </Link>

      <Link to="/blogs" className="navbar-links">
        {' '}
        Blogs
      </Link>
    </div>
  );
};
