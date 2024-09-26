import React from 'react';
import Sidebar from './components/Sidebar.js';

import Pacientes from './components/Pacientes.js';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />

      <Pacientes />
    </div>
  );
}

export default App;

