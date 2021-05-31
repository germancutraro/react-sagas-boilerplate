import { memo } from 'react';

const UserItem = ({ user, handleUserRoute }) => {
  return (
    <div>
      <div onClick={() => handleUserRoute(user.slug)}>
        <img src={user.avatar} alt="" />
        <p>{user.name}</p>
      </div>
    </div>
  );
};

export default memo(UserItem);
