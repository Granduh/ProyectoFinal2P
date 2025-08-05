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

              {/* Enlaces de contacto rápido */}
              <div className="d-flex gap-1 mt-2">
                <a
                  href={`mailto:${contact.email}`}
                  className="btn btn-sm btn-outline-secondary flex-fill"
                  title="Enviar email"
                >
                  <i className="fas fa-envelope"></i>
                </a>

                <a
                  href={`tel:${contact.phone}`}
                  className="btn btn-sm btn-outline-secondary flex-fill"
                  title="Llamar"
                >
                  <i className="fas fa-phone"></i>
                </a>

                <a
                  href={`https://maps.google.com?q=${encodeURIComponent(
                    contact.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline-secondary flex-fill"
                  title="Ver en mapa"
                >
                  <i className="fas fa-map"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
