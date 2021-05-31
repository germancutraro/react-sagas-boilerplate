import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import AuthRoute from './AuthRoute';
import Navbar from '@components/Navbar/Navbar';
// containers
import Home from './Home';
import Users from '@containers/Users/Users';
import User from '@containers/Users/User';
import Login from '@containers/Auth/Login';
import Register from '@containers/Auth/Register';
import Forgot from '@containers/Auth/ForgotPassword';
import Reset from '@containers/Auth/ResetPassword';
import ConfirmAccount from '@containers/Auth/ConfirmAccount';

const App = () => {
  return (
    <ErrorBoundary>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <AuthRoute path="/signin" component={Login} exact authMode="RIIL" />
        <AuthRoute path="/signup" component={Register} exact authMode="RIIL" />
        <Route path="/verify-email" component={ConfirmAccount} exact />
        <AuthRoute path="/forgot" component={Forgot} exact authMode="RIIL" />
        <AuthRoute path="/reset" component={Reset} exact authMode="RIIL" />
        <AuthRoute path="/users" component={Users} exact authMode="RINL" />
        <AuthRoute path="/users/:slug" component={User} exact authMode="RINL" />
      </Switch>
    </ErrorBoundary>
  );
};

export default App;
