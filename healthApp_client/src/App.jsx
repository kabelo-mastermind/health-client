import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AppRoutes from "./Layout/Routes";
import Navbar from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SideBar from './components/AdminDashboard/Sidebar'
import Dashboard from "./components/AdminDashboard/Dashboard";

function App() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:8085/user')
      .then(res => {
        console.log(res.data); // Log the entire response
        const { valid, username, role, userId, email } = res.data;
        if (valid) {
          setUserData({ username, role, userId, email });
        } else {
          navigate('/');
        }
      })
      .catch(err => console.error("Error fetching user data:", err));
  }, []); // or [] if you want it to run once on mount
  

  // Logging userData inside useEffect to ensure it's up-to-date
  useEffect(() => {
    if (userData) {
      console.log("Username:", userData.username);
      console.log("Role:", userData.role);
      console.log("User ID:", userData.userId);
      console.log("User email:", userData.email);
    }
  }, [userData]);

  return (
    <div className="mx-w-4 mx-auto">
      <Navbar userName={userData ? userData.username : ''} userRole={userData ? userData.role : ''} userId={userData ? userData.userId : ''} />
      <div className="max-w-7xl mx-auto mt-6">
        {userData && userData.role === 'admin' ? (
          <AppRoutes isAdmin={true} userId={userData.userId} AdminRole={userData.role} emails={userData ? userData.email : ''} />
        ) : (
          <AppRoutes isAdmin={false} userId={userData ? userData.userId : ''} userRole={userData ? userData.role : ''} userName={userData ? userData.username : ''} emails={userData ? userData.email : ''} />
        )}
      </div>
      <Footer />
    </div>
  );
  
}

export default App;
