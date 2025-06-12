import React from "react";
import Navbar from "./Navbarview";
import FooterView from "./FooterView";
import { Outlet } from "react-router-dom"; // Tidak perlu lagi import useNavigation

const PublicView = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterView />
    </>
  );
};

export default PublicView;
