import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
// redux
import { resetPasswordStart } from '../Auth/authActions';

const ResetPassword = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => dispatch(resetPasswordStart(data));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="password"
          name="password"
          {...register('password', { required: true, maxLength: 20 })}
        />

        <input type="submit" value="Ingresar" />
      </form>
    </div>
  );
};

export default ResetPassword;
