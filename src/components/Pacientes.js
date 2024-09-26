import React from 'react';
import './Pacientes.css';

const Pacientes = () => {
  const pacientes = [
    {
      nome: "João Carlos Silva",
      alergia: "Nenhuma Alergia",
      contato: "(99) 99999-9999",
      alta: "Não"
    },
    // Você pode adicionar mais pacientes aqui conforme necessário.
  ];

  return (
    <div className="page-container">
      {/* Nova div para o botão de filtro */}
      <div className="filtro-container">
        <button>Filtrar</button>
      </div>
      <div className="pacientes-container">
        <div className="pacientes-lista">
          {pacientes.map((paciente, index) => (
            <div key={index} className="paciente-card">
              <p><strong>{paciente.nome}</strong></p>
              <p>{paciente.alergia}</p>
              <p>Contato de emergência: {paciente.contato}</p>
              <p>Alta: {paciente.alta}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="button-container">
        <button className="cadastrar-paciente">Cadastrar Paciente</button>
      </div>
    </div>
  );
};

export default Pacientes;
