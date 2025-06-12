import React from 'react';
import { FaUserCircle, FaBars } from 'react-icons/fa'; // Mengimpor ikon hamburger dan user

const HeaderDashboard = ({ toggleSidebar }) => {
  return (
    <div className="flex items-center justify-between bg-teal-600 p-4 text-white">
      {/* Kiri Header: Hamburger Menu untuk Mobile */}
      <div className="md:hidden flex items-center">
        <button
          className="p-2 text-white bg-transparent border-none"
          onClick={toggleSidebar} // Menjalankan fungsi toggleSidebar yang membuka/tutup Sidebar
        >
          <FaBars className="w-6 h-6" />
        </button>
      </div>

      {/* Tengah Header: Nama Pengguna (Hanya tampilkan teks jika diperlukan) */}
      <div className="flex items-center justify-center flex-1 text-center">
        <div className="font-bold text-lg">MotorWash Admin</div>
      </div>

      {/* Kanan Header: Ikon User */}
      <div className="flex items-center space-x-4">
        {/* Hanya tampilkan ikon user */}
        <FaUserCircle className="text-2xl" />
      </div>
    </div>
  );
};

export default HeaderDashboard;
