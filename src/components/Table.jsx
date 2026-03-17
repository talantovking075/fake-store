import React, { useState } from "react";
import Modal from "./Modal";
import ViewModal from "./ViewModal";
import "../App.css";

const Table = ({ data, onRefresh }) => {
  const [modalData, setModalData] = useState(null);
  const [viewData, setViewData] = useState(null);
  const [opened, setOpened] = useState(false);
  const [viewOpened, setViewOpened] = useState(false);

  const handleAction = (id, action) => {
    const item = data?.find((p) => p.id === id);
    if (!item) return;

    console.log(`✅ Action: ${action} | ID: ${id}`); // debug

    if (action === "edit") {
      setModalData(item);
      setOpened(true);
    } else if (action === "view") {
      setViewData(item);
      setViewOpened(true);
    } else if (action === "delete") {
      if (window.confirm(`❌ ${item.name} ni rostdan o‘chirasizmi?`)) {
        fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" })
          .then((res) => {
            if (res.ok) {
              alert("✅ O‘chirildi!");
              onRefresh?.(); // yangilash
            } else {
              alert("❌ O‘chirishda xatolik!");
            }
          })
          .catch((err) => {
            console.error(err);
            alert("Server bilan bog‘lanishda muammo!");
          });
      }
    }
  };

  const handleEdit = async (updatedData) => {
    try {
      const res = await fetch(`http://localhost:3000/products/${updatedData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (res.ok) {
        alert("✅ Tahrirlandi!");
        setOpened(false);
        onRefresh?.(); // jadval yangilanadi
      } else {
        alert("❌ Server xatolik qaytardi!");
      }
    } catch (err) {
      console.error(err);
      alert("Server bilan bog‘lanishda muammo!");
    }
  };

  return (
    <>
      <table className="main__table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}$</td>
              <td className="action-buttons">
                <button className="btn-view" onClick={() => handleAction(item.id, "view")}>View</button>
                <button className="btn-edit" onClick={() => handleAction(item.id, "edit")}>Edit</button>
                <button className="btn-delete" onClick={() => handleAction(item.id, "delete")}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {opened && <Modal data={modalData} onClose={() => setOpened(false)} onEdit={handleEdit} />}

      {/* View Modal */}
      {viewOpened && (
        <ViewModal
          data={viewData}
          onClose={() => {
            setViewOpened(false);
            setViewData(null);
          }}
        />
      )}
    </>
  );
};

export default Table;