import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Importar todos los componentes
import ContactForm from "./components/ContactForm";
import SearchBar from "./components/SearchBar";
import FilterSort from "./components/FilterSort";
import ContactList from "./components/ContactList";
import DeleteConfirmModal from "./components/DeleteConfirmModal";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  // Estados principales
  const [contacts, setContacts] = useState(() => {
    // Inicializar desde localStorage si existe
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      try {
        return JSON.parse(savedContacts);
      } catch (error) {
        console.error("Error parsing contacts from localStorage:", error);
        return [];
      }
    }
    return [];
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [letterFilter, setLetterFilter] = useState("");
  const [editingContact, setEditingContact] = useState(null);
  const [deleteModal, setDeleteModal] = useState({
    show: false,
    contact: null,
  });
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });
  const [isInitialized, setIsInitialized] = useState(false);

  // Marcar como inicializado después del primer render
  useEffect(() => {
    setIsInitialized(true);
  }, []);

  // Guardar contactos en localStorage cuando cambien (solo después de la inicialización)
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts, isInitialized]);

  // Guardar tema en localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add("bg-dark", "text-white");
    } else {
      document.body.classList.remove("bg-dark", "text-white");
    }
  }, [darkMode]);

  // Funciones para manejar contactos
  const addContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  const updateContact = (updatedContact) => {
    setContacts((prev) =>
      prev.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setEditingContact(null);
  };

  const deleteContact = (contactToDelete) => {
    setContacts((prev) =>
      prev.filter((contact) => contact.id !== contactToDelete.id)
    );
    setDeleteModal({ show: false, contact: null });
  };

  const startEdit = (contact) => {
    setEditingContact(contact);
    // Scroll hacia arriba para mostrar el formulario
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setEditingContact(null);
  };

  const showDeleteModal = (contact) => {
    setDeleteModal({ show: true, contact });
  };

  const hideDeleteModal = () => {
    setDeleteModal({ show: false, contact: null });
  };

  // Filtrar y ordenar contactos
  const getFilteredAndSortedContacts = () => {
    let filtered = contacts;

    // Filtrar por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(
        (contact) =>
          contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtrar por letra inicial
    if (letterFilter) {
      filtered = filtered.filter(
        (contact) => contact.name.charAt(0).toUpperCase() === letterFilter
      );
    }

    // Ordenar
    filtered.sort((a, b) => {
      switch (sortOrder) {
        case "desc":
          return b.name.localeCompare(a.name);
        case "newest":
          return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
        case "oldest":
          return new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
        default: // 'asc'
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  };

  const filteredContacts = getFilteredAndSortedContacts();

  return (
    <div
      className={`min-vh-100 ${darkMode ? "bg-dark text-white" : "bg-light"}`}
    >
      {/* Header */}
      <nav
        className={`navbar ${
          darkMode ? "navbar-dark bg-dark" : "navbar-light bg-white"
        } shadow-sm`}
      >
        <div className="container">
          <div className="navbar-brand">
            <i
              className="fas fa-address-book text-primary me-2"
              style={{ fontSize: "1.5rem" }}
            ></i>
            <span className="fw-bold">Agenda de Contactos</span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <small className="text-muted">
              {contacts.length} contacto{contacts.length !== 1 ? "s" : ""} total
              {contacts.length !== 1 ? "es" : ""}
            </small>
            <ThemeToggle
              darkMode={darkMode}
              onToggle={() => setDarkMode(!darkMode)}
            />
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="container py-4">
        {/* Formulario de contacto */}
        <ContactForm
          onAddContact={addContact}
          onUpdateContact={updateContact}
          editingContact={editingContact}
          onCancelEdit={cancelEdit}
        />

        {/* Barra de búsqueda */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          darkMode={darkMode}
        />

        {/* Filtros y ordenación */}
        <FilterSort
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
          letterFilter={letterFilter}
          onLetterFilterChange={setLetterFilter}
          contactsCount={filteredContacts.length}
        />

        {/* Lista de contactos */}
        <div className="card shadow-sm">
          <div className="card-header bg-primary text-white">
            <h5 className="mb-0">
              <i className="fas fa-users me-2"></i>
              Mis Contactos
              {(searchTerm || letterFilter) && (
                <span className="badge bg-light text-primary ms-2">
                  {filteredContacts.length} encontrado
                  {filteredContacts.length !== 1 ? "s" : ""}
                </span>
              )}
            </h5>
          </div>
          <div className={`card-body ${darkMode ? "bg-dark" : ""}`}>
            <ContactList
              contacts={filteredContacts}
              onEdit={startEdit}
              onDelete={showDeleteModal}
              darkMode={darkMode}
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-5 py-4">
          <div className="text-muted">
            <small>
              <i className="fas fa-heart text-danger me-1"></i> Agenda de
              Contactos - Proyecto Final React JS
            </small>
          </div>
        </footer>
      </div>

      {/* Modal de confirmación de eliminación */}
      <DeleteConfirmModal
        show={deleteModal.show}
        contact={deleteModal.contact}
        onConfirm={() => deleteContact(deleteModal.contact)}
        onCancel={hideDeleteModal}
      />
    </div>
  );
}

export default App;
