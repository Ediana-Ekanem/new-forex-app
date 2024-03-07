// Modal.js
import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

const Modal = ({ closeModal, selectedItem }) => {
  // Receive closeModal and selectedItem
  return (
    <div className="fixed top-0 left-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-20 h-screen inset-0">
      <div className="flex justify-center mt-10">
        <div className="rounded bg-white shadow-lg w-[480px] px-10 py-5">
          <div className="flex justify-between">
            <h1 className="font-bold text-2xl">Payment Details</h1>
            <div>
              <button
                className="font-semibold text-2xl rounded-circle text-gray-500 "
                onClick={closeModal} // Call closeModal function
              >
                <IoIosCloseCircle size={35} />
              </button>
            </div>
          </div>
          <div className="items space-y-8 mt-10">
            <div className="flex space-x-36 font-semibold text-lg">
              <p className="text-[#7B7B7B]">Invoice:</p>
              <p>#{selectedItem.invoiceNum}</p>{" "}
              {/* Display selectedItem data */}
            </div>
            <div className="flex space-x-36 font-semibold text-lg">
              <p className="text-[#7B7B7B]">name:</p>
              <p>{selectedItem.name}</p>
            </div>
            <div className="flex space-x-36 font-semibold text-lg">
              <p className="text-[#7B7B7B]">amount:</p>
              <p>{selectedItem.amount}</p>
            </div>
            <div className="flex space-x-36 font-semibold text-lg">
              <p className="text-[#7B7B7B]">status:</p>
              <p>{selectedItem.statusBadge}</p>
            </div>
          </div>
          <div className="flex justify-center mb-5 mt-12">
            <button
              className="transition rounded font-bold border-2 border-[#36383a] text-[#52555E]  py-3 px-10 hover:bg-gray-500 hover:text-white hover:border-white"
              onClick={closeModal} // Call closeModal function
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
