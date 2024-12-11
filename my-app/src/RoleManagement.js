import React, { useState } from 'react';

const RoleManagement = ({ roles, setRoles }) => {
  const [newRoleName, setNewRoleName] = useState('');
  const [editingRoleId, setEditingRoleId] = useState(null);
  const [editedRoleName, setEditedRoleName] = useState('');
  const [newPermission, setNewPermission] = useState('');

  
  const handleAddRole = () => {
    if (newRoleName.trim()) {
      const newId = roles.length ? Math.max(...roles.map(r => r.id)) + 1 : 1;
      setRoles([...roles, { id: newId, name: newRoleName.trim(), permissions: [] }]);
      setNewRoleName('');
    }
  };


  const handleEditRole = (role) => {
    setEditingRoleId(role.id);
    setEditedRoleName(role.name);
  };


  const handleSaveEdit = () => {
    setRoles(roles.map(role =>
      role.id === editingRoleId ? { ...role, name: editedRoleName.trim() } : role
    ));
    setEditingRoleId(null);
    setEditedRoleName('');
  };

  
  const handleAddPermission = (roleId) => {
    if (newPermission.trim()) {
      setRoles(roles.map(role =>
        role.id === roleId
          ? { ...role, permissions: [...role.permissions, newPermission.trim()] }
          : role
      ));
      setNewPermission('');
    }
  };


  const handleDeleteRole = (roleId) => {
    if (window.confirm("Are you sure you want to delete this role?")) {
      setRoles(roles.filter(role => role.id !== roleId));
    }
  };

  return (
    <div>
      <h2>Role Management</h2>
      <input 
        type="text" 
        placeholder="Role Name" 
        value={newRoleName} 
        onChange={e => setNewRoleName(e.target.value)} 
      />
      <button onClick={handleAddRole}>Add Role</button>

      <ul>
        {roles.map(role => (
          <li key={role.id}>
            {editingRoleId === role.id ? (
              <>
                <input 
                  type="text" 
                  value={editedRoleName} 
                  onChange={e => setEditedRoleName(e.target.value)} 
                />
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={() => setEditingRoleId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {role.name}
                <button onClick={() => handleEditRole(role)}>Edit</button>
                <button onClick={() => handleDeleteRole(role.id)}>Delete</button>
              </>
            )}

            <h4>Permissions:</h4>
            {role.permissions.length > 0 ? (
              role.permissions.map((perm, index) => (
                <div key={index}>{perm}</div>
              ))
            ) : (
              <p>No permissions assigned.</p>
            )}
            <input 
              type="text" 
              placeholder="New Permission" 
              value={newPermission} 
              onChange={e => setNewPermission(e.target.value)} 
            />
            <button onClick={() => handleAddPermission(role.id)}>Add Permission</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleManagement;
