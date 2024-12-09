
const mockApi = (() => {
  let users = [];
  let roles = ['Admin', 'Editor', 'Viewer'];

  return {
    fetchUsers: () =>
      new Promise((resolve) => setTimeout(() => resolve([...users]), 500)),
    addUser: (user) =>
      new Promise((resolve) => {
        users.push(user);
        setTimeout(() => resolve(user), 500);
      }),
    deleteUser: (email) =>
      new Promise((resolve) => {
        users = users.filter((user) => user.email !== email);
        setTimeout(() => resolve(), 500);
      }),


    fetchRoles: () =>
      new Promise((resolve) => setTimeout(() => resolve([...roles]), 500)),
    addRole: (role) =>
      new Promise((resolve, reject) => {
        if (roles.includes(role)) {
          setTimeout(() => reject(new Error('Role already exists')), 500);
        } else {
          roles.push(role);
          setTimeout(() => resolve(role), 500);
        }
      }),
    deleteRole: (role) =>
      new Promise((resolve) => {
        roles = roles.filter((r) => r !== role);
        setTimeout(() => resolve(), 500);
      }),
  };
})();

export default mockApi;
