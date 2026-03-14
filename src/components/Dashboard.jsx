import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Table from "./Table";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  return (
    <div className="dashboard-container" style={{ display: "flex" }}>
      <Sidebar /> 
      
      <div className="main-content" style={{ flex: 1, padding: "20px" }}>
        <header>
          <h1>Boshqaruv Paneli</h1>
        </header>
        
        <main>
          {loading ? (
            <p>Ma'lumotlar yuklanmoqda...</p>
          ) : (
            <Table data={products} />
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;