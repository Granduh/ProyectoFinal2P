import React from "react";

// Componente para el toggle de modo oscuro (Estudiante 7)
const ThemeToggle = ({ darkMode, onToggle }) => {
  return (
    <button
      className={`btn ${darkMode ? "btn-light" : "btn-dark"} btn-sm`}
      onClick={onToggle}
      title={`Cambiar a modo ${darkMode ? "claro" : "oscuro"}`}
    >
      <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"} me-1`}></i>
      {darkMode ? "Modo Claro" : "Modo Oscuro"}
    </button>
  );
};

export default ThemeToggle;
