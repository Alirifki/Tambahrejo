import React from 'react';
import './Modal.css'; // Pastikan untuk mengimpor CSS untuk styling modal

const Modal = ({ onClose, children }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    &times; {/* Tombol close */}
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;