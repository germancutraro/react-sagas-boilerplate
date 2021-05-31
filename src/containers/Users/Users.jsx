import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import UserItem from '../../components/UserItem/UserItem';
// redux
import { getUsersStart } from './usersActions';
// css
import styles from './users.module.scss';

const Users = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { list, loading, error } = useSelector(({ users }) => users);

  useEffect(() => {
    dispatch(getUsersStart());
  }, [dispatch]);

  const handleUserRoute = slug => history.push(`/users/${slug}`);

  if (loading) return <h1>Loading...</h1>;
  else if (error) return <h2>{error}</h2>;

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {list.map(user => (
        <UserItem key={user.id} user={user} handleUserRoute={handleUserRoute} />
      ))}
    </div>
  );
};

export default Users;
