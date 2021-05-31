import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// redux
import { registerStart } from '../Auth/authActions';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => dispatch(registerStart(data));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          {...register('name', { required: true, maxLength: 20 })}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          {...register('email', { required: true, maxLength: 20 })}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          {...register('password', { required: true, maxLength: 20 })}
        />
        <input type="submit" value="Ingresar" />
      </form>
      <Link to="/forgot">¿Ya tienes una cuenta?</Link>
    </div>
  );
};

export default Login;
