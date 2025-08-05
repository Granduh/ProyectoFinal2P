import React, { useState, useEffect } from "react";

// Componente para el formulario de registro/edición de contactos (Estudiante 1 y 3)
const ContactForm = ({
  onAddContact,
  onUpdateContact,
  editingContact,
  onCancelEdit,
}) => {
  const [contact, setContact] = useState({
    id: null,
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingContact) {
      setContact(editingContact);
    } else {
      setContact({
        id: null,
        name: "",
        email: "",
        phone: "",
        address: "",
      });
    }
    setErrors({});
  }, [editingContact]);

  const validateForm = () => {
    const newErrors = {};

    if (!contact.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    if (!contact.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(contact.email)) {
      newErrors.email = "El email no es válido";
    }

    if (!contact.phone.trim()) {
      newErrors.phone = "El teléfono es requerido";
    } else if (!/^\d{10}$/.test(contact.phone.replace(/\D/g, ""))) {
      newErrors.phone = "El teléfono debe tener al menos 10 dígitos";
    }

    if (!contact.address.trim()) {
      newErrors.address = "La dirección es requerida";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (editingContact) {
      onUpdateContact(contact);
    } else {
      const newContact = {
        ...contact,
        id: Date.now(),
        createdAt: new Date().toISOString(),
      };
      onAddContact(newContact);
    }

    // Limpiar formulario
    setContact({
      id: null,
      name: "",
      email: "",
      phone: "",
      address: "",
    });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpiar error del campo al empezar a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleCancel = () => {
    if (onCancelEdit) {
      onCancelEdit();
    }
    setContact({
      id: null,
      name: "",
      email: "",
      phone: "",
      address: "",
    });
    setErrors({});
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">
          <i className="fas fa-user-plus me-2"></i>
          {editingContact ? "Editar Contacto" : "Agregar Nuevo Contacto"}
        </h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="name" className="form-label">
                <i className="fas fa-user me-1"></i>
                Nombre Completo *
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name"
                name="name"
                value={contact.name}
                onChange={handleChange}
                placeholder="Ingrese el nombre completo"
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="email" className="form-label">
                <i className="fas fa-envelope me-1"></i>
                Email *
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                name="email"
                value={contact.email}
                onChange={handleChange}
                placeholder="ejemplo@correo.com"
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="phone" className="form-label">
                <i className="fas fa-phone me-1"></i>
                Teléfono *
              </label>
              <input
                type="tel"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                id="phone"
                name="phone"
                value={contact.phone}
                onChange={handleChange}
                placeholder="1234567890"
              />
              {errors.phone && (
                <div className="invalid-feedback">{errors.phone}</div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="address" className="form-label">
                <i className="fas fa-map-marker-alt me-1"></i>
                Dirección *
              </label>
              <input
                type="text"
                className={`form-control ${errors.address ? "is-invalid" : ""}`}
                id="address"
                name="address"
                value={contact.address}
                onChange={handleChange}
                placeholder="Ingrese la dirección"
              />
              {errors.address && (
                <div className="invalid-feedback">{errors.address}</div>
              )}
            </div>
          </div>

          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary">
              <i
                className={`fas ${editingContact ? "fa-save" : "fa-plus"} me-1`}
              ></i>
              {editingContact ? "Actualizar Contacto" : "Agregar Contacto"}
            </button>

            {editingContact && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCancel}
              >
                <i className="fas fa-times me-1"></i>
                Cancelar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
