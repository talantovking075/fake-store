import React from 'react';

const Modal = ({ data, onClose, onDelete, onEdit }) => {
  if (!data) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Mahsulot tafsilotlari</h2>
        <p><strong>ID:</strong> {data.id}</p>
        <p><strong>Nomi:</strong> {data.name}</p>
        <p><strong>Narxi:</strong> {data.price}$</p>
        
        {/* Tugmalar qismi */}
        <div className="modal-actions">
          <button className="edit-btn" onClick={() => onEdit(data)}>Tahrirlash</button>
          <button className="delete-btn" onClick={() => onDelete(data.id)}>O'chirish</button>
          <button className="close-btn" onClick={onClose}>Yopish</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;