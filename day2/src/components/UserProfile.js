import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h3>用户信息</h3>
      <p>姓名: {user.name}</p>
      <p>年龄: {user.age}</p>
    </div>
  );
};

export default UserProfile;
