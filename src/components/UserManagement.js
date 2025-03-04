import { useState, useEffect } from "react";
import { fetchUsers } from "../services/userService";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  // Filter users based on search input & selected role
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter === "All" || user.role === filter)
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full"
      />

      {/* Role Filter */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 mb-4 w-full"
      >
        <option value="All">All Roles</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
        <option value="Moderator">Moderator</option>
      </select>

      {/* User List */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.role}</td>
              <td className="border p-2">{user.status}</td>
              <td className="border p-2">
                <button
                  className="bg-red-500 text-white px-2 py-1 mx-1"
                  onClick={() => alert(`User ${user.name} blocked`)}
                >
                  Block
                </button>
                <button
                  className="bg-blue-500 text-white px-2 py-1 mx-1"
                  onClick={() => alert(`User ${user.name} deleted`)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
