import React from 'react';
import './modal.css';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;


/* Asi se LLama el modal
const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsModalOpen(true)}>Abrir Modal</button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2>Título del Modal</h2>
                <p>Contenido del modal...</p>
                <button onClick={() => setIsModalOpen(false)}>Cerrar</button>
            </Modal>
        </div>
    );
*/