let users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
];

let roles = [
  { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
];

const mockApi = {
  fetchUsers: () => Promise.resolve(users),
  
  addUser: (user) => {
    users.push({ id: users.length + 1, ...user });
    return Promise.resolve();
  },
  
  deleteUser: (email) => {
    users = users.filter(user => user.email !== email);
    return Promise.resolve();
  },
  
  fetchRoles: () => Promise.resolve(roles),
  
  addRole: (role) => {
    roles.push({ id: roles.length + 1, ...role });
    return Promise.resolve();
  },

};

export default mockApi;
