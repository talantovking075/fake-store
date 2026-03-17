import React, { useState, useEffect } from "react";
import Table from "./Table";
import "./Dahsboard.css";
const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/products");
      
      if (!response.ok) throw new Error("Tarmoq xatosi");
      
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Xatolik:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="dashboard-container" style={{ display: "flex" }}>
      <div className="main-content" style={{ flex: 1, padding: "20px" }}>
        <header>
          <h1>Boshqaruv Paneli</h1>
          <button className="add">+ Add new product</button>
        </header>
        
        <main>
          {loading ? (
            <p>Ma'lumotlar yuklanmoqda...</p>
          ) : (
            <Table data={products} onRefresh={fetchData} />
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;