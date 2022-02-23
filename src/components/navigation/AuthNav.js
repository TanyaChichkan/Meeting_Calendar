import { Link } from 'react-router-dom';
import { constantsText } from '../../constants/constants';
import Nav from '../assets-components/Nav';

const AuthNav = () => {
  return (
    <Nav parent={constantsText.authNav}>
      <Link to={constantsText.registerLink}>Sign Up</Link>
      <Link to={constantsText.loginLink}>Sign In</Link>
    </Nav>
  );
};

export default AuthNav;
