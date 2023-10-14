import React, { useState } from 'react';

const TextModal = ({ content, isOpen, onClose }) => {
    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? '' : 'hidden'}`}>
            {/* <div className="modal-overlay absolute inset-0 bg-gray-500 opacity-75"></div> */}
                <div className="modal-container z-50 w-full max-w-md mx-auto overflow-y-auto bg-white rounded shadow-lg px-4">
                    <div className="modal-content p-4">
                    <div className="modal-header flex justify-end">
                        <button
                        className="text-gray-600 hover:text-gray-800"
                        onClick={onClose}
                        >
                        <i className="fas fa-times">X</i>
                        </button>
                    </div>
                    <div className="modal-body">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextModal;