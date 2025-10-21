import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const UserProfile = () => {
  const { user, updateUser } = useContext(UserContext);
  const [editableUser, setEditableUser] = useState(user);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingAge, setIsEditingAge] = useState(false);

  const isNumeric = (value) => /^\d*$/.test(value);

  const handleBlur = (field, value) => {
    updateUser({ ...editableUser, [field]: value });
    if (field === 'name') setIsEditingName(false);
    if (field === 'age') setIsEditingAge(false);
  };

  return (
    <div>
      <h3>用户信息</h3>
      <label>
        姓名:
        {isEditingName ? (
          <input
            type="text"
            value={editableUser.name}
            onChange={(e) => setEditableUser({ ...editableUser, name: e.target.value })}
            onBlur={(e) => handleBlur('name', e.target.value)}
            autoFocus
          />
        ) : (
          <span onClick={() => setIsEditingName(true)}>{editableUser.name}</span>
        )}
      </label>
      <br />
      <label>
        年龄:
        {isEditingAge ? (
          <input
            type="number"
            value={editableUser.age}
            onChange={(e) => {
              const value = e.target.value;
              if (isNumeric(value)) {
                setEditableUser({ ...editableUser, age: value });
              }
            }}
            onBlur={(e) => handleBlur('age', e.target.value)}
            autoFocus
          />
        ) : (
          <span onClick={() => setIsEditingAge(true)}>{editableUser.age}</span>
        )}
      </label>
    </div>
  );
};

export default UserProfile;
