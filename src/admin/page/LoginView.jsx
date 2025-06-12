import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate untuk melakukan redirect
import { useAuth } from "../context/AuthContext"; // Import useAuth untuk mengakses login function

const LoginView = () => {
  const { login } = useAuth(); // Ambil fungsi login dari AuthContext
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Untuk melakukan navigasi setelah login

  // Fungsi untuk menangani login
  const handleLogin = async (e) => {
    e.preventDefault();

    // Validasi atau panggil API untuk login di sini
    const userData = {
      username,
      role: "admin", // Atau role yang relevan dari API
    };
    const token = "your-token"; // Token dari API atau autentikasi

    // Login melalui AuthContext
    login(userData, token);

    // Setelah login sukses, arahkan ke dashboard admin jika role adalah 'admin'
    if (userData.role === "admin") {
      navigate("/admindashboard"); // Redirect ke dashboard
    } else {
      navigate("/"); // Jika bukan admin, arahkan ke halaman lain
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-teal-600 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-teal-600 font-semibold">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 mt-2 border-2 border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-teal-600 font-semibold">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-2 border-2 border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
