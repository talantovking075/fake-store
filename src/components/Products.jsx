import React, { useState, useEffect } from "react";
import Table from "./Table";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = () => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="main-content">
      <h1>Mahsulotlar ro'yxati</h1>
      {loading ? (
        <p>Ma'lumotlar yuklanmoqda...</p>
      ) : (
        <Table data={products} onRefresh={fetchProducts} />
      )}
    </div>
  );
};

export default Products;