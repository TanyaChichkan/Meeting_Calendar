import { useSelector, useDispatch } from 'react-redux';
import { getAuthUser } from '../../redux/auth/authSelectors';
import { logOutOperation } from '../../redux/auth/authOperations';
import { constantsText } from '../../constants/constants';
import Nav from '../assets-components/Nav';

const AuthMenu = () => {
  const user = useSelector(getAuthUser);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOutOperation());
  };

  return (
    <Nav parent={constantsText.authMenu}>
      <p>Welcome,{user.name || user.email}</p>

      <button type='button' onClick={handleClick}>
        Log Out
      </button>
    </Nav>
  );
};

export default AuthMenu;
