import React, { useEffect, useState } from 'react';
import AdminApp from './AdminApp';

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8085/api/users');
        const data = await response.json();
        setClients(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching clients:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AdminApp>
    <div className="p-8">
      <h2 className="text-2xl mb-4">Clients</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-200">ID</th>
              <th className="px-4 py-2 border border-gray-200">Username</th>
              <th className="px-4 py-2 border border-gray-200">Email</th>
              <th className="px-4 py-2 border border-gray-200">Role</th>
              <th className="px-4 py-2 border border-gray-200">Created At</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(client => (
              <tr key={client.id}>
                <td className="px-4 py-2 border border-gray-200">{client.id}</td>
                <td className="px-4 py-2 border border-gray-200">{client.username}</td>
                <td className="px-4 py-2 border border-gray-200">{client.email}</td>
                <td className="px-4 py-2 border border-gray-200">{client.role}</td>
                <td className="px-4 py-2 border border-gray-200">
                  {new Date(client.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </AdminApp>
  );
};

export default Clients;
