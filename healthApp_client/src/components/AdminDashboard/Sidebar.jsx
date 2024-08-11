import React from 'react';
import { FaHome, FaUsers, FaBox, FaShoppingCart } from 'react-icons/fa';

const Sidebar = ({ openSidebarToggle, toggleSidebar }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 w-64 flex-shrink-0 h-full transition-transform transform ${
        openSidebarToggle ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 z-30 shadow-lg fixed md:relative`}
    >
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">Admin Panel</h1>
        <button
          className="mt-4 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white md:hidden"
          onClick={toggleSidebar}
        >
          Toggle Sidebar
        </button>
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
            <a href="/dashboard" className="flex items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
              <FaHome className="text-gray-500 dark:text-gray-300" />
              <span className="text-gray-800 dark:text-white">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="clients" className="flex items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
              <FaBox className="text-gray-500 dark:text-gray-300" />
              <span className="text-gray-800 dark:text-white">Clients</span>
            </a>
          </li>
          <li>
            <a href="/appointments" className="flex items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
              <FaUsers className="text-gray-500 dark:text-gray-300" />
              <span className="text-gray-800 dark:text-white">Appoinments</span>
            </a>
          </li>
          {/* <li>
            <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
              <FaCog className="text-gray-500 dark:text-gray-300" />
              <span className="text-gray-800 dark:text-white">Settings</span>
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
