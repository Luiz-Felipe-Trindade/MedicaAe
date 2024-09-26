import React from 'react';
import './sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <p>MedicAê</p>
      </div>
      <nav>
        <ul>
          <li><span className="icon"></span> Início</li>
          <li><span className="icon"></span> Pesquisa</li>
          <li><span className="icon"></span> Estoque</li>
          <li><span className="icon"></span> Configurações</li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
