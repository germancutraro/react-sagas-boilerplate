import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../containers/Auth/authActions';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(({ auth }) => auth);

  const handleLogout = () => dispatch(logout());

  return (
    <nav>
      {!isAuth && <Link to="/signup">Sign up </Link>}
      {!isAuth && <Link to="/signin">Sign in </Link>}
      {isAuth && <Link to="/users">Users </Link>}
      {isAuth && <span onClick={handleLogout}>Log out</span>}
    </nav>
  );
};

export default Navbar;
