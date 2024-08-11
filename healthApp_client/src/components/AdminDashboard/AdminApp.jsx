import React, { useState } from 'react';
import Sidebar from './Sidebar';

function AdminApp({ children }) {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const toggleSidebar = () => {
    console.log('Sidebar toggled!'); // Debug log
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar openSidebarToggle={openSidebarToggle} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-grow bg-gray-100 overflow-y-auto">
        <div className="p-4 md:p-8">{children}</div>
      </div>
    </div>
  );
}

export default AdminApp;
