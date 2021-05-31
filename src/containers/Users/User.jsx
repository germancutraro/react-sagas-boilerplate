import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
// redux
import { getOneUserStart } from './usersActions';

const User = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector(({ users }) => users);

  const { slug } = useParams();

  useEffect(() => {
    dispatch(getOneUserStart(slug));
  }, [dispatch, slug]);

  if (loading) return <h1>Loading...</h1>;
  else if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h1>Usuario: {user?.fullName}</h1>
    </div>
  );
};

export default User;
