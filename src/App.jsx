import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Users from './components/Users';
import Cars from './components/Cars';
import './App.css';

function App() {
  return (
    <div className="layout">
      <Sidebar />
      
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;