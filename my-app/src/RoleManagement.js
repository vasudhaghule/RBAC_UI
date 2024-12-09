import React, { useState } from 'react';

const RoleManagement = ({ roles, setRoles }) => {
  const [newRole, setNewRole] = useState('');
  const [editingRole, setEditingRole] = useState(null);
  const [editedRole, setEditedRole] = useState('');

  const handleAddRole = () => {
    if (newRole && !roles.includes(newRole)) {
      setRoles([...roles, newRole]);
      setNewRole('');
    }
  };

  const handleDeleteRole = (role) => {
    setRoles(roles.filter((r) => r !== role));
  };

  const handleEditRole = (role) => {
    setEditingRole(role);
    setEditedRole(role);
  };

  const handleSaveEdit = () => {
    setRoles(roles.map((role) => (role === editingRole ? editedRole : role)));
    setEditingRole(null);
    setEditedRole('');
  };

  return (
    <div>
      <h2>Role Management</h2>
      <input
        type="text"
        placeholder="Role Name"
        value={newRole}
        onChange={(e) => setNewRole(e.target.value)}
      />
      <button onClick={handleAddRole}>Add Role</button>

      <ul>
        {roles.map((role) => (
          <li key={role}>
            {editingRole === role ? (
              <>
                <input
                  type="text"
                  value={editedRole}
                  onChange={(e) => setEditedRole(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={() => setEditingRole(null)}>Cancel</button>
              </>
            ) : (
              <>
                {role}
                <button onClick={() => handleEditRole(role)}>Edit</button>
                <button onClick={() => handleDeleteRole(role)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleManagement;
