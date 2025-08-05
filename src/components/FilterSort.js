import React from "react";

// Componente para filtrado y ordenación (Estudiante 6)
const FilterSort = ({
  sortOrder,
  onSortChange,
  letterFilter,
  onLetterFilterChange,
  contactsCount,
}) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-md-4 mb-3 mb-md-0">
            <label className="form-label fw-bold">
              <i className="fas fa-sort me-1"></i>
              Ordenar por:
            </label>
            <select
              className="form-select"
              value={sortOrder}
              onChange={(e) => onSortChange(e.target.value)}
            >
              <option value="asc">Nombre A-Z</option>
              <option value="desc">Nombre Z-A</option>
              <option value="newest">Más recientes</option>
              <option value="oldest">Más antiguos</option>
            </select>
          </div>

          <div className="col-md-8">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <label className="form-label fw-bold mb-0">
                <i className="fas fa-filter me-1"></i>
                Filtrar por letra inicial:
              </label>
              <small className="text-muted">
                {contactsCount} contacto{contactsCount !== 1 ? "s" : ""}
                {letterFilter && ` (filtrado por "${letterFilter}")`}
              </small>
            </div>

            <div className="d-flex flex-wrap gap-1">
              <button
                className={`btn btn-sm ${
                  letterFilter === "" ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => onLetterFilterChange("")}
                title="Mostrar todos"
              >
                Todos
              </button>

              {letters.map((letter) => (
                <button
                  key={letter}
                  className={`btn btn-sm ${
                    letterFilter === letter
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => onLetterFilterChange(letter)}
                  title={`Filtrar por ${letter}`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSort;
