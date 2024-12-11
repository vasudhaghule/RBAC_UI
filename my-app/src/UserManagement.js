import React, { useState } from 'react';

const UserManagement = ({ users, setUsers, roles }) => {
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '', status: 'Active' });
  const [editingUserEmail, setEditingUserEmail] = useState(null);

  const handleAddUser = () => {
    if (newUser.name && newUser.email && newUser.role) {
      if (users.find(user => user.email === newUser.email)) {
        alert("User with this email already exists.");
        return;
      }
      setUsers([...users, { ...newUser }]);
      setNewUser({ name: '', email: '', role: '', status: 'Active' });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleEditUser = (user) => {
    setEditingUserEmail(user.email);
    setNewUser(user);
  };

  
  const handleSaveEdit = () => {
    if (!newUser.name || !newUser.email || !newUser.role) {
      alert("Please fill in all fields.");
      return;
    }
    setUsers(users.map(user =>
      user.email === editingUserEmail ? { ...newUser } : user
    ));
    setEditingUserEmail(null);
    setNewUser({ name: '', email: '', role: '', status: 'Active' });
  };

  const handleDeleteUser = (email) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter(user => user.email !== email));
    }
  };

  
  const toggleStatus = (email) => {
    setUsers(users.map(user =>
      user.email === email ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' } : user
    ));
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
        {roles.map(role => (
          <option key={role.id} value={role.name}>{role.name}</option>
        ))}
      </select>
      <button onClick={editingUserEmail ? handleSaveEdit : handleAddUser}>
        {editingUserEmail ? 'Update User' : 'Add User'}
      </button>

      <ul>
        {users.map(user => (
          <li key={user.email}>
            {user.name} - {user.email} - {user.role} - {user.status}
            <button onClick={() => handleEditUser(user)}>Edit</button>
            <button
              onClick={() => toggleStatus(user.email)}
              disabled={user.status === (user.status === 'Active' ? 'Inactive' : 'Active')}
            >
              {user.status === 'Active' ? 'Deactivate' : 'Activate'}
            </button>
            <button onClick={() => handleDeleteUser(user.email)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
