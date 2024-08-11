import React, { useEffect, useState } from 'react';
import AdminApp from './AdminApp';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch appointments data
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://localhost:8085/api/patient_appointments');
        if (!response.ok) {
          throw new Error('Failed to fetch appointments');
        }
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  // Helper function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <AdminApp>
    <div className="p-8">
      <h2 className="text-2xl mb-4">Appointments</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            {/* <th className="border border-gray-300 px-4 py-2">User ID</th> */}
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Preferred Date & Time</th>
            <th className="border border-gray-300 px-4 py-2">Reason</th>
            <th className="border border-gray-300 px-4 py-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td className="border border-gray-300 px-4 py-2">{appointment.id}</td>
              {/* <td className="border border-gray-300 px-4 py-2">{appointment.user_id}</td> */}
              <td className="border border-gray-300 px-4 py-2">{appointment.name}</td>
              <td className="border border-gray-300 px-4 py-2">{appointment.email}</td>
              <td className="border border-gray-300 px-4 py-2">{formatDate(appointment.preferred_datetime)}</td>
              <td className="border border-gray-300 px-4 py-2">{appointment.reason}</td>
              <td className="border border-gray-300 px-4 py-2">{formatDate(appointment.created_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </AdminApp>
  );
};

export default Appointments;
