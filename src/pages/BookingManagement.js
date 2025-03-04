import { useState } from "react";
import dummyBookings from "../data/dummyBookings";

const BookingManagement = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // Filtered bookings based on search input and status
  const filteredBookings = dummyBookings.filter(
    (booking) =>
      booking.route.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter ? booking.status === statusFilter : true)
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Booking Management</h2>

      {/* Search by route */}
      <input
        type="text"
        placeholder="Search by route..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded mb-4 w-full"
      />

      {/* Filter by booking status */}
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="border p-2 rounded mb-4 w-full"
      >
        <option value="">All Statuses</option>
        <option value="Completed">Completed</option>
        <option value="Cancelled">Cancelled</option>
        <option value="Pending">Pending</option>
      </select>

      {/* Booking Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">User</th>
            <th className="border p-2">Route</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.map((booking) => (
            <tr key={booking.id} className="text-center">
              <td className="border p-2">{booking.user}</td>
              <td className="border p-2">{booking.route}</td>
              <td className="border p-2">{booking.date}</td>
              <td className="border p-2">
                <span
                  className={`px-2 py-1 rounded text-white ${
                    booking.status === "Completed"
                      ? "bg-green-500"
                      : booking.status === "Cancelled"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {booking.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingManagement;
