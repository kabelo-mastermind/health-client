import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logo.png";
import QuoteModal from "../Modals/QuoteModal/QuoteModal";
import { FaHome, FaUsers, FaBox, FaShoppingCart } from "react-icons/fa";

const Header = ({ userRole, userId }) => {
  axios.defaults.withCredentials = true;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Uncomment if needed for debugging
    // console.log("User Role========:", userRole);
  }, [userRole]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    axios
      .post("http://localhost:8085/logout", {}, { withCredentials: true })
      .then(() => {
        navigate("/login");
        // Refresh the page
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  return (
    <>
      <header className="pb-6 bg-white lg:pb-0">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="/" title="" className="flex">
                <img className="w-auto h-8 lg:h-10" src={logo} alt="Logo" />
              </a>
            </div>

            <button
              type="button"
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
              onClick={toggleMobileMenu}
            >
              <svg
                className={`w-6 h-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>
              <svg
                className={`w-6 h-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
              <a
                href="#About"
                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                About
              </a>
              <a
                href="#features"
                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                Features
              </a>
              <a
                href="#solutions"
                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                Solutions
              </a>
              <a
                href="#team"
                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                Team
              </a>

              {userRole === "admin" && (
                <a
                  href="/dashboard"
                  className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Dashboard
                </a>
              )}

              <div className="px-6 mt-4 flex items-center space-x-4">
                {userRole === "patient" || userRole === "admin" ? (
                  <button
                    onClick={handleLogout}
                    className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700"
                  >
                    Login
                  </Link>
                )}

                <button
                  onClick={openModal}
                  className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700"
                  role="button"
                >
                  Get started now
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <nav
            className={`pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                <a
                  href="#features"
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Features
                </a>
                <a
                  href="#solutions"
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Solutions
                </a>
                <a
                  href="#resources"
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Resources
                </a>
                <a
                  href="#pricing"
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Pricing
                </a>

                {/* Admin Sidebar Links in Mobile View */}
                {userRole === "admin" && (
                  <>
                    <a
                      href="/dashboard"
                      className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                      <FaHome className="inline-block mr-2" />
                      Dashboard
                    </a>
                    <a
                      href="#"
                      className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                      <FaUsers className="inline-block mr-2" />
                      Clients
                    </a>
                    <a
                      href="#"
                      className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                      <FaBox className="inline-block mr-2" />
                      Appoinments
                    </a>
                    {/* <a
                      href="#"
                      className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                      <FaCog className="inline-block mr-2" />
                      Settings
                    </a> */}
                  </>
                )}
              </div>
            </div>

            <div className="px-6 mt-6">
              <button
                onClick={openModal}
                className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700"
                role="button"
              >
                Get started now
              </button>
            </div>

            <div className="px-6 mt-6">
              {userRole === "patient" || userRole === "admin" ? (
                <button
                  onClick={handleLogout}
                  className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700"
                >
                  Login
                </Link>
              )}
            </div>
          </nav>
        </div>
      </header>

      {isModalOpen && <QuoteModal closeModal={closeModal} userId={userId} />}
    </>
  );
};

export default Header;
