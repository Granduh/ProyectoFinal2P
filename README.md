# 📱 Agenda de Contactos - Proyecto Final React JS

Una aplicación web moderna desarrollada con React.js para gestionar contactos de manera inteligente y eficiente.

![React](https://img.shields.io/badge/React-18.0+-blue.svg)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.0+-purple.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 🎯 Objetivo General

Desarrollar una aplicación web con React JS que permita a los usuarios gestionar una agenda de contactos inteligente. Esta agenda permite agregar, editar, eliminar, buscar y organizar contactos, con almacenamiento local persistente y diseño responsive con Bootstrap.

## ✨ Características Principales

- ✅ **Formulario de registro completo** con validaciones
- 🔍 **Búsqueda en tiempo real** por nombre o email
- 📋 **Visualización en tarjetas** con diseño moderno
- ✏️ **Edición de contactos** existentes
- 🗑️ **Eliminación con confirmación** modal
- 🔤 **Filtrado por letra inicial** del nombre
- 📊 **Ordenación múltiple** (A-Z, Z-A, fecha)
- 🌙 **Modo oscuro/claro** completamente funcional
- 📱 **Diseño 100% responsive**
- 💾 **Persistencia en localStorage**

## 🛠️ Tecnologías Utilizadas

- **React.js 18+** - Framework principal
- **Bootstrap 5** - Framework CSS
- **Font Awesome 6** - Iconografía
- **localStorage** - Persistencia de datos
- **CSS3** - Estilos personalizados
- **ES6+** - JavaScript moderno

## 🏗️ Funcionalidades por Estudiante

### 👤 Estudiante 1 - Formulario de Registro

- Campos: Nombre, Email, Teléfono, Dirección
- Validaciones en tiempo real
- Feedback visual de errores
- Limpieza automática del formulario

### 📋 Estudiante 2 - Listado y Visualización

- Tarjetas Bootstrap responsivas
- Avatares con iniciales coloridas
- Enlaces de acción rápida (email, teléfono, mapa)
- Estado vacío con mensaje informativo

### ✏️ Estudiante 3 - Edición de Contactos

- Reutilización del formulario de registro
- Carga automática de datos existentes
- Confirmación de cambios
- Cancelación de edición

### 🗑️ Estudiante 4 - Eliminación de Contactos

- Modal de confirmación Bootstrap
- Información del contacto a eliminar
- Prevención de eliminación accidental
- Feedback visual claro

### 🔍 Estudiante 5 - Búsqueda en Tiempo Real

- Filtrado instantáneo
- Búsqueda por nombre y email
- Indicador visual de búsqueda activa
- Botón para limpiar búsqueda

### 🔤 Estudiante 6 - Filtrado y Ordenación

- Botones alfabéticos A-Z
- Ordenación ascendente/descendente
- Filtrado por fecha de creación
- Contador de resultados

### 🌙 Estudiante 7 - Diseño Responsive + Modo Oscuro

- Adaptación completa a móviles
- Toggle de tema claro/oscuro
- Persistencia de preferencia de tema
- Transiciones suaves

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 14+ instalado
- npm o yarn instalado

### Pasos de instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/Granduh/ProyectoFinal2P
cd proyecto-final-2p
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Ejecutar la aplicación**

```bash
npm start
```

4. **Abrir en el navegador**

```
http://localhost:3000
```

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes React
│   ├── ContactForm.js   # Formulario de contactos
│   ├── ContactList.js   # Lista de contactos
│   ├── SearchBar.js     # Barra de búsqueda
│   ├── FilterSort.js    # Filtros y ordenación
│   ├── DeleteConfirmModal.js # Modal de confirmación
│   └── ThemeToggle.js   # Toggle de tema
├── App.js               # Componente principal
├── App.css              # Estilos personalizados
└── index.js             # Punto de entrada
```

## 🎨 Características de UI/UX

- **Diseño Moderno**: Inspirado en aplicaciones móviles modernas
- **Animaciones Suaves**: Transiciones CSS para mejor experiencia
- **Feedback Visual**: Estados de loading, error y éxito claramente definidos
- **Accesibilidad**: Cumple con estándares WCAG básicos

## 💾 Persistencia de Datos

Los contactos se almacenan automáticamente en `localStorage` del navegador:

- ✅ Los datos persisten entre sesiones
- ✅ No se requiere conexión a internet

## 📱 Responsive Design

La aplicación está optimizada para:

- 📱 **Dispositivos Móviles**
- 💻 **Dispositivos de Escritorio**

## 🔧 Scripts Disponibles

```bash
npm start      # Ejecutar en desarrollo
npm build      # Construir para producción
npm test       # Ejecutar pruebas
npm run eject  # Eyectar configuración (no recomendado)
```

## 🤝 Integración Grupal

- **Estado unificado**: Un solo useState para todos los contactos
- **Persistencia compartida**: useEffect sincroniza con localStorage
- **Responsabilidades claras**: Cada estudiante mantiene su componente

## 📋 Checklist de Funcionalidades

- [x] Formulario con validaciones
- [x] Lista de contactos en tarjetas
- [x] Edición de contactos existentes
- [x] Eliminación con confirmación
- [x] Búsqueda en tiempo real
- [x] Filtrado por letra inicial
- [x] Ordenación múltiple
- [x] Modo oscuro/claro
- [x] Diseño completamente responsive
- [x] Persistencia en localStorage
- [x] Validaciones de formulario
- [x] Estados de carga y error
- [x] Iconografía completa
- [x] Animaciones CSS

## 👥 Contribuidores

- Estudiante 1: Formulario de registro -> Alexis Morales
- Estudiante 2: Listado y visualización -> Carlos Yánez
- Estudiante 3: Edición de contactos -> Esteban Muñiz
- Estudiante 4: Eliminación de contactos -> Jhonatan Moreta
- Estudiante 5: Búsqueda en tiempo real -> Luis Flores
- Estudiante 6: Filtrado y ordenación -> Eduardo Caiza
- Estudiante 7: Responsive + Modo oscuro -> Andres Toledo

---
