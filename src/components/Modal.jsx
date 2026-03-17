import React, { useState } from 'react';
import "./Modal.css";

const Modal = ({ data, onClose, onEdit }) => {
  const [formData, setFormData] = useState({ ...data });

  if (!data) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Mahsulotni tahrirlash</h2>
        
        <div className="edit-form">
          <p><strong>ID:</strong> {formData.id}</p>
          
          <label>Nomi:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name || ""} 
            onChange={handleChange} 
          />

          <label>Narxi ($):</label>
          <input 
            type="number" 
            name="price" 
            value={formData.price || ""} 
            onChange={handleChange} 
          />

          {/* ===== YANGI RASM QISMI (Edit uchun) ===== */}
          <label>Rasm URL:</label>
          <input 
            type="text" 
            name="image" 
            value={formData.image || ""} 
            onChange={handleChange} 
            placeholder="https://example.com/rasm.jpg"
          />
          
          {formData.image && (
            <img 
              src={formData.image} 
              alt={formData.name} 
              className="product-image" 
            />
          )}
        </div>
        
        <div className="modal-actions">
          <button className="edit-btn" onClick={() => onEdit(formData)}>Saqlash</button>
          <button className="close-btn" onClick={onClose}>Bekor qilish</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;