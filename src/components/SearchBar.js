import React from "react";

// Componente para la búsqueda en tiempo real (Estudiante 5)
const SearchBar = ({ searchTerm, onSearchChange, darkMode }) => {
  return (
    <div className="row mb-4">
      <div className="col-12">
        <div className="input-group shadow-sm">
          <span className="input-group-text bg-primary text-white">
            <i className="fas fa-search"></i>
          </span>
          <input
            type="text"
            className={`form-control ${
              darkMode ? "bg-dark text-white border-dark" : ""
            }`}
            placeholder="Buscar contacto por nombre o email..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchTerm && (
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => onSearchChange("")}
              title="Limpiar búsqueda"
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
        {searchTerm && (
          <small className="text-muted d-block mt-2">
            <i className="fas fa-info-circle me-1"></i>
            Buscando: "{searchTerm}"
          </small>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
