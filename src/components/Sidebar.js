import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5 flex flex-col">
      <h2 className="text-xl font-bold mb-6">Tripoline Admin</h2>
      
      <nav className="space-y-4">
        <ul>
          <li className="mb-3">
            <Link to="/" className="hover:text-gray-300">🏠 Dashboard</Link>
          </li>
          <li className="mb-3">
            <Link to="/users" className="hover:text-gray-300">👥 Users</Link>
          </li>
          <li className="mb-3">
            <Link to="/routes" className="hover:text-gray-300">🗺 Routes</Link>
          </li>
          <li className="mb-3">
            <Link to="/bookings" className="hover:text-gray-300">📅 Bookings</Link>
          </li>
          <li className="mb-3">
            <Link to="/analytics" className="hover:text-gray-300">📊 Analytics</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
