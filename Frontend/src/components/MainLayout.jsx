import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
