import React, { useState } from "react";
import DashSidebar from "./DashSidebar/DashSidebar";
import DashNav from "./DashNavbar/DashNav";

const DashboardLayout = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <div>
      <DashNav toggleSideBar={toggleSideBar} />
      <DashSidebar showSideBar={showSideBar} />
    </div>
  );
};

export default DashboardLayout;
