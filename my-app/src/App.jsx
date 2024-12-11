import React, { useEffect, useState } from 'react';
import UserManagement from './UserManagement';
import RoleManagement from './RoleManagement';
import PermissionManagement from './PermissionManagement';
import mockApi from './mockApi';

const App = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    mockApi.fetchUsers().then(setUsers);
    mockApi.fetchRoles().then(setRoles);
  }, []);

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <UserManagement users={users} setUsers={setUsers} roles={roles} />
      <RoleManagement roles={roles} setRoles={setRoles} />
      <PermissionManagement roles={roles} />
    </div>
  );
};

export default App;
