import React, { Component } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

class sidenavbar extends Component {
  render() {
    return (
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          {/* Sidebar left */}
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              SMART QUEST
            </a>
          </CDBSidebarHeader>

          {/* Sidebar Content */}
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>


              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "activeClicked" : "")}
              >
                <CDBSidebarMenuItem icon="columns">
                  All Complains
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                to="/addconform"
                className={({ isActive }) => (isActive ? "activeClicked" : "")}
              >
                <CDBSidebarMenuItem icon="table">
                  Complaints
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                to="/dash"
                className={({ isActive }) => (isActive ? "activeClicked" : "")}
              >
                <CDBSidebarMenuItem icon="chart-line">
                  Dashboard
                </CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>

          {/* Sidebar Footer */}
          <CDBSidebarFooter style={{ textAlign: "center" }}>
            <div
              style={{
                padding: "20px 5px",
              }}
            >
              user login
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    );
  }
}

export default sidenavbar;
