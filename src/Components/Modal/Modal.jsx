import ReactModal from "react-modal"
import "./modal.css"
export const Modal = ({ isOpen, onClose, children }) => {

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            className=" modal-content"
            overlayClassName="modal-overlay"
            contentLabel="Confirmation"
            closeTimeoutMS={200}
        >
            <button
                onClick={onClose}
                className="modal-close-button"
                aria-label="Close modal"
            >
                &times;
            </button>
            {children}
        </ReactModal >
    )
}