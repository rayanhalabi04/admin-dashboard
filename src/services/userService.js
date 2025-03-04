export const mockUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Blocked" },
    { id: 3, name: "Alice Brown", email: "alice@example.com", role: "User", status: "Active" },
    { id: 4, name: "Bob Johnson", email: "bob@example.com", role: "Moderator", status: "Active" }
  ];
  
  // Simulate fetching data
  export const fetchUsers = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockUsers);
      }, 500);
    });
  };
  