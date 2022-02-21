import { useSelector, useDispatch } from 'react-redux';
import { getAuthUser } from '../../redux/auth/authSelectors';
import { logOutOperation } from '../../redux/auth/authOperations';

const AuthMenu = () => {
  const user = useSelector(getAuthUser);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOutOperation());
  };

  return (
    <div>
      <p>Welcome,{user.name || user.email}</p>
      <button type='button' onClick={handleClick}>
        Sign Out
      </button>
    </div>
  );
};

export default AuthMenu;
