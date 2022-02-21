import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAuthLoggedIn } from '../../redux/auth/authSelectors';
import Container from '../assets-components/Container';
import AuthNav from '../navigation/AuthNav';
import AuthMenu from './AuthMenu';

const Header = () => {
  const UserIsLoggedIn = useSelector(getAuthLoggedIn);
  return (
    <header>
      <Container isFromHeader={true}>
        <Link to='/dashboard'>Dashboard</Link>
        <h1 style={{ textAlign: 'center' }}>Scheduler</h1>

        {UserIsLoggedIn ? <AuthMenu /> : <AuthNav />}
      </Container>
    </header>
  );
};

export default Header;
