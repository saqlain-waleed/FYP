import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowConform from './components/showconform';
import AddConform from './components/addconform';
import NavBar from './components/navbar';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ShowConform />} /> {/* Use `element` with JSX */}
          <Route path="/addconform" element={<AddConform />} /> {/* Use `element` with JSX */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
