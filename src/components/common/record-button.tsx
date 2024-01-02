'use client'
import { FC, useState } from "react";
import Modal from "./modal";

export const RecordButton: FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        className="w-60 h-12 text-white border-none cursor-pointer bg-gradient-to-r from-blue-600 to-blue-300 shadow-md rounded-full"
        onClick={handleButtonClick}
      >
        記録・登録
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-md relative w-5/6 h-5/6 ">
            <Modal />
            <div className="absolute top-3 right-3">
              <button className="w-8 h-8 relative border-2 border-black rounded-none" onClick={handleCloseModal}>
                <span className="absolute top-1/2 left-1/2 w-3 h-0.5 bg-black transform -translate-x-1/2 -translate-y-1/2 rotate-45"></span>
                <span className="absolute top-1/2 left-1/2 w-3 h-0.5 bg-black transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
