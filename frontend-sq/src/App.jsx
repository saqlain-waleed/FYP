import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowConform from './components/showconform';
import AddConform from './components/addconform';
import NavBar from './components/sidenavbar';

function Layout() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <div style={{ width: '270px' }}>
        <NavBar />
      </div>

      {/* Main Content Area */}
      <div
        style={{
          flex: 1,
          padding: '20px',
          overflowY: 'auto',
          backgroundColor: '#f8f9fa',
          flexWrap: 'wrap',
                }}
      >
        {/* This is where the nested route components render */}
        <Routes>
          <Route path="/" element={<ShowConform />} />
          <Route path="/addconform" element={<AddConform />} />
        </Routes>
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
