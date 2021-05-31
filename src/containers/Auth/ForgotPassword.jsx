import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// redux
import { forgotPasswordStart } from '../Auth/authActions';

const ForgotPassword = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => dispatch(forgotPasswordStart(data));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="email"
          {...register('email', { required: true, maxLength: 20 })}
        />

        <input type="submit" value="Enviar" />
      </form>
      <Link to="/signin">Volver</Link>
    </div>
  );
};

export default ForgotPassword;
