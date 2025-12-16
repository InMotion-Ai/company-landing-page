import React, { useEffect, useRef } from 'react';
import { HiX } from 'react-icons/hi';

const Modal = ({ isOpen, onClose, children, title = '' }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }

    // Handle ESC key and backdrop click
    const handleClose = (e) => {
      if (e.target === dialog) {
        onClose();
      }
    };

    const handleCancel = (e) => {
      e.preventDefault();
      onClose();
    };

    dialog.addEventListener('click', handleClose);
    dialog.addEventListener('cancel', handleCancel);

    return () => {
      dialog.removeEventListener('click', handleClose);
      dialog.removeEventListener('cancel', handleCancel);
    };
  }, [isOpen, onClose]);

  return (
    <dialog
      ref={dialogRef}
      className="rounded-3xl p-0 max-w-2xl w-full backdrop:bg-black backdrop:bg-opacity-50 shadow-2xl"
    >
      <div className="relative bg-white rounded-3xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
          aria-label="Close modal"
        >
          <HiX className="text-2xl" />
        </button>

        {/* Modal content */}
        <div className="p-6 md:p-8 max-h-[90vh] overflow-y-auto">
          {title && (
            <h2 className="text-3xl md:text-4xl font-medium mb-6 pr-8">
              {title}
            </h2>
          )}
          {children}
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
