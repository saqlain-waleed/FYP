import React, { useState, useEffect } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidenavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 740);

  // Handle window resize to toggle collapse
  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 740);
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "scroll initial",
      }}
    >
      <CDBSidebar
        textColor="#fff"
        backgroundColor="#333"
        toggled={isCollapsed}
        breakpoint={590} // Automatically handles collapse for small screens
        collapsed={isCollapsed} // Dynamically control collapsed state
      >


        {/* Sidebar Content */}
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activeClicked" : "")}
            >
              <CDBSidebarMenuItem icon="columns">All Complains</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="/addconform"
              className={({ isActive }) => (isActive ? "activeClicked" : "")}
            >
              <CDBSidebarMenuItem icon="table">Complaints</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="/dash"
              className={({ isActive }) => (isActive ? "activeClicked" : "")}
            >
              <CDBSidebarMenuItem icon="chart-line">Dashboard</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        {/* Sidebar Footer */}
        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div style={{ padding: "20px 5px" }}>
            {isCollapsed ? <i className="fa fa-user"></i> : "user login"}
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidenavbar;
