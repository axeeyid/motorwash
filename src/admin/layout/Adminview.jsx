import React, { useState } from "react";
import Sidebar from "./SideBarDashboard";
import HeaderDashboard from "../components/HeaderDashboard";
import { Outlet } from "react-router-dom";

const AdminView = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Fungsi untuk toggle (membuka dan menutup sidebar)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar: Tersembunyi di perangkat kecil, tampil di perangkat besar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Konten Utama */}
      <div className="flex-1 flex flex-col bg-teal-500 overflow-auto">
        {/* Header Responsif */}
        <HeaderDashboard toggleSidebar={toggleSidebar} />

        {/* Main Content Responsif */}
        <main className="flex-1 p-4 rounded-md overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminView;
