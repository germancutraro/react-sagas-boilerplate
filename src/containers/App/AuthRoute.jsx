import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRoute = ({ component: Component, ...rest }) => {
  const { isAuth, user } = useSelector(({ auth }) => auth);

  const isValid =
    isAuth && Object.keys(user).length && localStorage.getItem('token');

  // RINL = Redirect If Not Logged
  // RIIL = Redirect If Is Logged
  const condition = rest.authMode === 'RINL' ? isValid : !isValid;

  return (
    <Route
      {...rest}
      render={props =>
        condition ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default AuthRoute;
