import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"; // Import Navigate
import PublicLayout from "./layout/PublicLayout";
import CreateMotorWash from "./components/form/MotorWashForm";
import Home from "./page/Home";
import Analytic from "./admin/components/AnalyticsPage";
import CreateOrder from "./components/form/OrderForm";
import AdminDashboard from "./admin/layout/Adminview";
import Dashboard from "./admin/page/DashboardHome";
import LoginView from "./admin/page/LoginView";
import RegisterView from "./admin/page/RegisterView";
import { useAuth } from "./admin/context/AuthContext"; // Pastikan mengimpor useAuth untuk mendapatkan user
import MotorwashPage from "./admin/page/MotorWashPage"
import DetailMatic from "./page/DetailMatic"
import DetailSport from "./page/DetailSport"
import DetailPremium from "./page/DetailPremium"
import Booking from "./page/Booking"
import BookingNota from "./page/BookingNota"
import About from "./page/About"
import Service from "./page/Service"
import Contact from "./page/Contact"

// ProtectedRoute untuk validasi autentikasi dan role
const ProtectedRoute = ({ children, roles }) => {
  const { user } = useAuth();  // Mengambil user dari AuthContext

  if (!user) {
    return <Navigate to="/login" />;  // Jika tidak ada user, redirect ke /login
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/" />; // Jika role user tidak sesuai, redirect ke / 
  }

  return children; // Jika valid, tampilkan children (halaman yang dituju)
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "detailmatic", element: <DetailMatic /> },
      { path: "detailsport", element: <DetailSport /> },
      { path: "detailpremium", element: <DetailPremium /> },
      { path: "bookingpage", element: <Booking /> },
      { path: "bookingnota", element: <BookingNota /> },
      { path: "about", element: <About /> },
      { path: "service", element: <Service/> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "/admindashboard",
    element: (
      <ProtectedRoute roles={["admin"]}>  {/* Mengatur akses berdasarkan role */}
        <AdminDashboard />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "motorwash", element: <CreateMotorWash /> },
      { path: "datamotorwash", element: <Analytic /> },
      { path: "createorder", element: <CreateOrder /> },
      { path: "setting", element: <MotorwashPage /> },
    ],
  },
  { path: "/login", element: <LoginView /> },
  { path: "/register", element: <RegisterView /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
