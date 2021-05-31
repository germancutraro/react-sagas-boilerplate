import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// redux
import { loginStart } from '../Auth/authActions';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => dispatch(loginStart(data));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="email"
          {...register('email', { required: true, maxLength: 20 })}
        />
        <input
          type="password"
          name="password"
          {...register('password', { required: true, maxLength: 20 })}
        />
        <input type="submit" value="Ingresar" />
      </form>
      <Link to="/forgot">¿Olvidaste tu contraseña?</Link>
    </div>
  );
};

export default Login;
