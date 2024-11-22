import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowConform from "./components/showconform";
import AddConform from "./components/addconform";
import NavBar from "./components/sidenavbar";
import TopNavBar from "./components/TopNavbar";

function Layout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(window.innerWidth < 7400);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsSidebarCollapsed(window.innerWidth < 740);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Top Navbar */}
      <div style={{ flexShrink: 0 }}>
        <TopNavBar />
      </div>

      {/* Main Content Area */}
      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <div style={{ width: isSidebarCollapsed ? "80px" : "270px", transition: "width 0.3s" }}>
          <NavBar isCollapsed={isSidebarCollapsed} />
        </div>

        {/* Page Content */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            overflowY: "auto",
            backgroundColor: "#f8f9fa",
          }}
        >
          <Routes>
            <Route path="/" element={<ShowConform />} />
            <Route path="/addconform" element={<AddConform />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
