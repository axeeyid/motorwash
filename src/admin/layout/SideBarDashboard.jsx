import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaRegFileAlt, FaCog, FaUsers, FaClipboardList, FaBox, FaSignOutAlt } from 'react-icons/fa';
import customAPI from "../../api.js"  // Import axios

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);

  const handleItemClick = () => {
    toggleSidebar(); // Menutup sidebar saat item diklik
  };

  const toggleDropdown = (index) => {
    setIsDropdownOpen(isDropdownOpen === index ? null : index); // Toggle dropdown menu
  };

  const handleLogout = async () => {
    try {
      // Kirim request logout ke backend menggunakan axios
      await customAPI.post('/auth/logout'); // Gantilah URL API sesuai dengan backend kamu
      // Setelah berhasil logout, redirect ke halaman login atau halaman lain
      window.location.href = '/login'; // Ganti dengan path halaman login yang sesuai
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <div>
      {/* Overlay untuk Sidebar di Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-teal-600 bg-opacity-50 lg:hidden z-40"
          onClick={toggleSidebar} // Menutup sidebar jika overlay diklik
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-teal-600 text-white p-4 font-primary lg:relative lg:h-full lg:w-48 lg:block lg:translate-x-0 transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0 z-50' : '-translate-x-full'
        } lg:z-auto`}
      >
        {/* Close Button for Mobile */}
        <button
          className="lg:hidden absolute top-4 right-4 text-white"
          onClick={toggleSidebar} // Menutup sidebar pada mobile
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Sidebar Header */}
        <h1 className="text-2xl mb-6 font-extrabold italic">Admin Dashboard</h1>

        {/* Sidebar Menu */}
        <ul>
          <li>
            <Link to="datamotorwash" className="flex items-center py-4 font-bold" onClick={handleItemClick}>
              <FaTachometerAlt className="mr-3" /> Analytics Data
            </Link>
          </li>

          <li>
            <Link to="createorder" className="flex items-center py-4 font-bold" onClick={handleItemClick}>
              <FaRegFileAlt className="mr-3" /> Create Order
            </Link>
          </li>

          <li>
            <Link to="motorwash" className="flex items-center py-4 font-bold" onClick={handleItemClick}>
              <FaBox className="mr-3" /> Create Layanan
            </Link>
          </li>

          {/* Dropdown Menu */}
          <li>
            <Link to="setting"
              className="flex items-center py-4 font-bold w-full text-left"
              onClick={() => toggleDropdown(1)}
            >
              <FaCog className="mr-3" /> Settings
            </Link>
            {isDropdownOpen === 1 && (
              <ul className="pl-8 bg-gray-700 rounded-md mt-2">
                <li>
                  <Link to="manageusers" className="flex items-center py-4 text-gray-300" onClick={handleItemClick}>
                    <FaUsers className="mr-3" /> Manage Users
                  </Link>
                </li>
                <li>
                  <Link to="orderhistory" className="flex items-center py-4 text-gray-300" onClick={handleItemClick}>
                    <FaClipboardList className="mr-3" /> Order History
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Logout */}
          <li>
            <button className="flex items-center py-4 font-bold" onClick={handleLogout}>
              <FaSignOutAlt className="mr-3" /> Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
