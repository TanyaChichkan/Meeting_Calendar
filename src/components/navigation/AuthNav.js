import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <nav
        style={{
          width: '150px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Link to='/register'>Sign Up</Link>
        <Link to='/login'>Sign In</Link>
      </nav>
    </div>
  );
};

export default AuthNav;
