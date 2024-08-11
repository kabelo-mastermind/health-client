import React, { useEffect, useState } from 'react';
import Card from './Card';
import { FaBox, FaUsers } from 'react-icons/fa';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import AdminApp from './AdminApp';

ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [clients, setClients] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Dashboard mounted');
    
    const fetchData = async () => {
      try {
        const [appointmentsRes, clientsRes] = await Promise.all([
          fetch('http://localhost:8085/api/dashboard_appointments'),
          fetch('http://localhost:8085/api/users')
        ]);

        if (!appointmentsRes.ok || !clientsRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const appointmentsData = await appointmentsRes.json();
        const clientsData = await clientsRes.json();

        console.log('Appointments Data:', appointmentsData);
        console.log('Clients Data:', clientsData);

        setAppointments(appointmentsData);
        setClients(clientsData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data from the server.');
      }
    };

    fetchData();
  }, []);

  // Helper function to count unique IDs
  const countUniqueIds = (data) => {
    return new Set(data.map(item => item.id)).size;
  };

  // Format date as 'YYYY-MM'
  const formatDateToMonthYear = (dateString) => {
    if (!dateString) return 'Unknown';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; 
    const formattedDate = `${year}-${month < 10 ? `0${month}` : month}`;
    return formattedDate;
  };

  // Format date as 'MMM YYYY'
  const formatDateToDisplay = (dateString) => {
    if (!dateString) return 'Unknown';
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short' };
    return date.toLocaleDateString(undefined, options);
  };

  // Group clients by month
  const clientsByMonth = clients.reduce((acc, client) => {
    const monthYear = formatDateToMonthYear(client.created_at);
    acc[monthYear] = (acc[monthYear] || 0) + 1;
    return acc;
  }, {});

  // Prepare data for the bar chart
  const months = Object.keys(clientsByMonth);
  const clientCounts = months.map(month => clientsByMonth[month]);

  // Prepare data for the Line chart
  const appointmentsByMonth = appointments.reduce((acc, appointment) => {
    const monthYear = formatDateToMonthYear(appointment.preferred_datetime);
    acc[monthYear] = (acc[monthYear] || 0) + 1;
    return acc;
  }, {});

  const appointmentMonths = Object.keys(appointmentsByMonth);
  const appointmentCounts = appointmentMonths.map(month => appointmentsByMonth[month]);

  const appointmentsChartData = {
    labels: appointmentMonths.map(month => formatDateToDisplay(new Date(`${month}-01`))),
    datasets: [
      {
        label: 'Appointments',
        data: appointmentCounts,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const clientsChartData = {
    labels: months,
    datasets: [
      {
        label: 'Clients by Month',
        data: clientCounts,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const appointmentsCount = countUniqueIds(appointments);
  const clientsCount = countUniqueIds(clients);

  return (
    <AdminApp>
      <div className="grow p-8">
        <h2 className="text-2xl mb-4">Dashboard</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5'>
          <Card icon={<FaBox />} title="Appointments" value={appointmentsCount} />
          <Card icon={<FaUsers />} title="Clients" value={clientsCount} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Appointments</h3>
            <Line data={appointmentsChartData} />
          </div>
          <div className="bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Clients</h3>
            <Bar 
              data={clientsChartData} 
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 1000,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </AdminApp>
  );
};

export default Dashboard;
