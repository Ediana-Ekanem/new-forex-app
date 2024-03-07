// Page.js
import React, { useState } from "react";
import CardList from "./components/CardList";
import Modal from "./components/Modal";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // State to store selected item data

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-[#202938]">
      <CardList openModal={openModal} /> {/* Pass openModal function */}
      {showModal && (
        <Modal closeModal={closeModal} selectedItem={selectedItem} />
      )}
      {/* Render modal conditionally */}
    </div>
  );
};

export default Page;
