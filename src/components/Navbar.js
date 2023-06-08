import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <div>
        <Link to="/"> Home</Link>
      </div>
      <div>
        {' '}
        <Link to="/blogs"> Blogs</Link>
      </div>
    </div>
  );
};
