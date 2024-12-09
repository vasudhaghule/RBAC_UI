import React, { useState } from 'react';

const PermissionManagement = ({ rolesWithPermissions, setRolesWithPermissions }) => {
  const handleTogglePermission = (roleName, permissionName) => {
    setRolesWithPermissions(prevRoles =>
      prevRoles.map(role =>
        role.name === roleName
          ? {
              ...role,
              permissions: role.permissions.map(permission =>
                permission.name === permissionName
                  ? { ...permission, isAssigned: !permission.isAssigned }
                  : permission
              ),
            }
          : role
      )
    );
  };

  return (
    <div>
      <h2>Permission Management</h2>
      {rolesWithPermissions.map((role) => (
        <div key={role.name}>
          <h3>{role.name}</h3>
          <ul>
            {role.permissions.map((perm) => (
              <li key={perm.name}>
                <label>
                  <input 
                    type="checkbox" 
                    checked={perm.isAssigned} 
                    onChange={() => handleTogglePermission(role.name, perm.name)} 
                  />
                  {perm.name}: {perm.isAssigned ? 'Assigned' : 'Not Assigned'}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PermissionManagement;