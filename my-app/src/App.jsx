import React, { useState } from 'react';
import UserManagement from './UserManagement';
import RoleManagement from './RoleManagement';
import PermissionManagement from './PermissionManagement';

const App = () => {
    const [users, setUsers] = useState([]);
    const [rolesWithPermissions, setRolesWithPermissions] = useState([
        {
            name: 'Admin',
            permissions: [
                { name: 'Read Users', isAssigned: true },
                { name: 'Write Users', isAssigned: true },
                { name: 'Delete Users', isAssigned: true },
            ],
        },
        {
            name: 'Editor',
            permissions: [
                { name: 'Read Users', isAssigned: true },
                { name: 'Write Users', isAssigned: false },
                { name: 'Delete Users', isAssigned: false },
            ],
        },
        {
            name: 'Viewer',
            permissions: [
                { name: 'Read Users', isAssigned: true },
                { name: 'Write Users', isAssigned: false },
                { name: 'Delete Users', isAssigned: false },
            ],
        },
    ]);

    return (
        <div className="app">
            <h1>RBAC Admin Dashboard</h1>
            <UserManagement users={users} setUsers={setUsers} />
            <RoleManagement roles={rolesWithPermissions} setRoles={setRolesWithPermissions} />
            <PermissionManagement rolesWithPermissions={rolesWithPermissions} setRolesWithPermissions={setRolesWithPermissions} />
        </div>
    );
};

export default App;