import React, { useState } from 'react';

const PermissionManagement = ({ roles, setRoles }) => {
  const [newPermission, setNewPermission] = useState('');
  const [roleToEdit, setRoleToEdit] = useState(null);

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

  const handleRemovePermission = (roleId, permission) => {
    setRoles(roles.map(role =>
      role.id === roleId
        ? { ...role, permissions: role.permissions.filter(p => p !== permission) }
        : role
    ));
  };

  const handleEditPermission = (roleId, oldPermission) => {
    const newPermission = prompt("Edit permission:", oldPermission);
    if (newPermission && newPermission.trim()) {
      setRoles(roles.map(role =>
        role.id === roleId
          ? {
              ...role,
              permissions: role.permissions.map(p =>
                p === oldPermission ? newPermission.trim() : p
              ),
            }
          : role
      ));
    }
  };

  const handleSetRoleToEdit = (roleId) => {
    setRoleToEdit(roleId === roleToEdit ? null : roleId);
  };

  return (
    <div>
      <h2>Permission Management</h2>
      {roles.map((role) => (
        <div key={role.id}>
          <h3>{role.name}</h3>
          <button onClick={() => handleSetRoleToEdit(role.id)}>
            {roleToEdit === role.id ? 'Cancel Editing' : 'Edit Permissions'}
          </button>
          
          {roleToEdit === role.id && (
            <div>
              <input
                type="text"
                value={newPermission}
                onChange={(e) => setNewPermission(e.target.value)}
                placeholder="Add new permission"
              />
              <button onClick={() => handleAddPermission(role.id)}>Add Permission</button>
            </div>
          )}

          <ul>
            {role.permissions.length > 0 ? (
              role.permissions.map((permission) => (
                <li key={permission}>
                  {permission}
                  {roleToEdit === role.id && (
                    <>
                      <button onClick={() => handleEditPermission(role.id, permission)}>Edit</button>
                      <button onClick={() => handleRemovePermission(role.id, permission)}>Remove</button>
                    </>
                  )}
                </li>
              ))
            ) : (
              <li>No permissions assigned.</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PermissionManagement;
