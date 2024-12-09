import React, { useState } from 'react';

const UserManagement = ({ users, setUsers }) => {
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '', status: 'Active' });

  const handleAddUser = () => {
    setUsers([...users, newUser]);
    setNewUser({ name: '', email: '', role: '', status: 'Active' });
  };

  const handleDeleteUser = (email) => {
    setUsers(users.filter(user => user.email !== email));
  };

  return (
    <div>
      <h2>User Management</h2>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <select
        value={newUser.role}
        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
      >
        <option value="">Select Role</option>
        <option value="Admin">Admin</option>
        <option value="Editor">Editor</option>
        <option value="Viewer">Viewer</option>
      </select>
      <button onClick={handleAddUser}>Add User</button>

      <ul>
        {users.map((user) => (
          <li key={user.email}>
            {user.name} - {user.email} - {user.role} - {user.status}
            <button onClick={() => handleDeleteUser(user.email)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
