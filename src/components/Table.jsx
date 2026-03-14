import React, { useState } from "react";
import Modal from "./Modal";

const Table = ({ data, status }) => {
  const [modalData, setModalData] = useState(null);
  const [opened, setOpened] = useState(false);

  const handleAction = (id, status, select) => {
    setModalData({ id, status, select });
    setOpened(true);
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
              <td>
                <button onClick={() => handleAction(item.id, status, "view")}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {opened && <Modal status={modalData} opened={setOpened} />}
    </>
  );
};

export default Table;