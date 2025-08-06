import React from "react";

// Componente para el listado y visualización de contactos (Estudiante 2)
const ContactList = ({ contacts, onEdit, onDelete, darkMode }) => {
  if (contacts.length === 0) {
    return (
      <div className="text-center py-5">
        <i
          className="fas fa-address-book text-muted"
          style={{ fontSize: "4rem" }}
        ></i>
        <h4 className="text-muted mt-3">No hay contactos disponibles</h4>
        <p className="text-muted">
          Agrega tu primer contacto usando el formulario de arriba.
        </p>
      </div>
    );
  }

  const getRandomAvatar = (name) => {
    const colors = [
      "bg-primary",
      "bg-success",
      "bg-info",
      "bg-warning",
      "bg-danger",
      "bg-secondary",
      "bg-dark",
    ];
    const colorIndex = name.charCodeAt(0) % colors.length;
    return colors[colorIndex];
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  const formatPhoneNumber = (phone) => {
    const cleaned = phone.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  };

  return (
    <div className="row">
      {contacts.map((contact) => (
        <div key={contact.id} className="col-lg-4 col-md-6 mb-4">
          <div
            className={`card h-100 shadow-sm border-0 ${
              darkMode ? "bg-dark text-white" : ""
            }`}
          >
            <div className="card-body d-flex flex-column">
              {/* Avatar y nombre */}
              <div className="d-flex align-items-center mb-3">
                <div
                  className={`rounded-circle d-flex align-items-center justify-content-center text-white fw-bold me-3 ${getRandomAvatar(
                    contact.name
                  )}`}
                  style={{ width: "60px", height: "60px", fontSize: "1.2rem" }}
                >
                  {getInitials(contact.name)}
                </div>
                <div className="flex-grow-1">
                  <h5 className="card-title mb-1">{contact.name}</h5>
                  <small className="text-muted">
                    Agregado:{" "}
                    {new Date(
                      contact.createdAt || Date.now()
                    ).toLocaleDateString()}
                  </small>
                </div>
              </div>

              {/* Información de contacto */}
              <div className="contact-info flex-grow-1">
                <div className="mb-2">
                  <i className="fas fa-envelope text-primary me-2"></i>
                  <span className="small">{contact.email}</span>
                </div>

                <div className="mb-2">
                  <i className="fas fa-phone text-success me-2"></i>
                  <span className="small">
                    {formatPhoneNumber(contact.phone)}
                  </span>
                </div>

                <div className="mb-3">
                  <i className="fas fa-map-marker-alt text-danger me-2"></i>
                  <span className="small">{contact.address}</span>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="d-flex gap-2 mt-auto">
                <button
                  className="btn btn-outline-primary btn-sm flex-fill"
                  onClick={() => onEdit(contact)}
                  title="Editar contacto"
                >
                  <i className="fas fa-edit me-1"></i>
                  Editar
                </button>
                <button
                  className="btn btn-outline-danger btn-sm flex-fill"
                  onClick={() => onDelete(contact)}
                  title="Eliminar contacto"
                >
                  <i className="fas fa-trash me-1"></i>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
