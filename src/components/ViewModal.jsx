import React from 'react';
import "./Modal.css";

const ViewModal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content modal-view">
        <h2>📄 Mahsulotni ko‘rish</h2>
        
        <div className="edit-form">
          {/* ===== YANGI RASM QISMI ===== */}
          <label>Rasm:</label>
          {data.image ? (
            <img 
              src={data.image} 
              alt={data.name} 
              className="product-image" 
            />
          ) : (
            <p className="view-text">Rasm mavjud emas</p>
          )}

          <p><strong>ID:</strong> {data.id}</p>
          
          <label>Nomi:</label>
          <p className="view-text">{data.name}</p>

          <label>Narxi ($):</label>
          <p className="view-text">{data.price}$</p>
        </div>
        
        <div className="modal-actions">
          <button className="close-btn" onClick={onClose}>Yopish</button>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;