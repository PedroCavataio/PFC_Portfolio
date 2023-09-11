import React from 'react';
import './modal.styles.css';

const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {/* Agrega el contenido de tu modal aquí */}
        <h2>Bienvenido</h2>
        <p>¡Ingresaste correctamente!</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
