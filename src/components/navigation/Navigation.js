import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <nav>
        <Link to='/register'>Sign Up</Link>
        <Link to='/login'>Sign In</Link>
      </nav>
    </div>
  );
};

export default Navigation;
