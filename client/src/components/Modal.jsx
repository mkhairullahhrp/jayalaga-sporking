// Modal.js
import React, { useState } from "react";

const Modal = ({ show, onClose, title, children, options, onSave }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSave = () => {
    onSave(selectedOption);
    onClose();
  };

  return (
    show && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-4 rounded-md w-1/3 max-h-full overflow-y-auto">
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h2 className="text-lg font-semibold">{title}</h2>
            <button onClick={onClose} className="text-red-500">
              &times;
            </button>
          </div>
          <div>
            {children}
            {options && (
              <div>
                {options.map((option, index) => (
                  <div key={index} className="flex items-center mt-5">
                    <button
                      onClick={() => handleOptionClick(option)}
                      className={`py-2 px-4 rounded-md font-semibold mx-2 transition duration-300 ease-in-out ${
                        selectedOption === option
                          ? "bg-orange-600 text-white"
                          : "bg-white-500 text-black hover:bg-orange-300 border-2"
                      }`}
                    >
                      {option}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              onClick={onClose}
              className="mt-5 py-2 px-4 bg-orange-500 text-white rounded-md font-semibold mx-auto"
            >
              Batal
            </button>
            <button
              onClick={handleSave}
              className="mt-5 py-2 px-4 bg-orange-500 text-white rounded-md font-semibold mx-auto"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
