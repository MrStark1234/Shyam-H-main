import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";

const Layout = ({ children }) => {
  return (
    <div className="w-screen">
      <div className="w-screen flex items-start h-full">
        <Sidebar />
        <div className="w-full h-screen overflow-auto">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
