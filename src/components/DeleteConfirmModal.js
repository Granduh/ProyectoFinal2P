import React from "react";

// Modal de confirmación para eliminación (Estudiante 4)
const DeleteConfirmModal = ({ show, contact, onConfirm, onCancel }) => {
  if (!show || !contact) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-danger text-white">
            <h5 className="modal-title">
              <i className="fas fa-exclamation-triangle me-2"></i>
              Confirmar Eliminación
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onCancel}
            ></button>
          </div>
          <div className="modal-body">
            <div className="text-center">
              <div className="mb-3">
                <i
                  className="fas fa-user-times text-danger"
                  style={{ fontSize: "3rem" }}
                ></i>
              </div>
              <h6>¿Estás seguro que deseas eliminar este contacto?</h6>
              <div className="alert alert-warning mt-3">
                <strong>{contact.name}</strong>
                <br />
                <small className="text-muted">{contact.email}</small>
              </div>
              <p className="text-muted small">
                Esta acción no se puede deshacer.
              </p>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancel}
            >
              <i className="fas fa-times me-1"></i>
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={onConfirm}
            >
              <i className="fas fa-trash me-1"></i>
              Sí, Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
