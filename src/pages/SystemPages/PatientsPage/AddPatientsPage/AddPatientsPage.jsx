import { useState } from "react";
import styles from "./AddPatientsPage.module.css";
import { NavBar } from "../../../../components/NavBar/NavBar";
import { InputWithLabel } from "../../../../components/Inputs/InputWithLabel";
import { Textarea } from "../../../../components/Inputs/Textarea";
import { InputCpfMask } from "../../../../components/Inputs/InputCpfMask";
import axios from "axios"; // Importar o axios para fazer as requisições HTTP

export const AddPatientsPage = () => {
  // Definir o estado para os campos
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [contatoEmergencia, setContatoEmergencia] = useState("");
  const [statusAlta, setStatusAlta] = useState(null); // Pode ser true ou false
  const [genero, setGenero] = useState(""); // "masculino" ou "feminino"
  const [alergias, setAlergias] = useState("");
  const [observacoes, setObservacoes] = useState("");

  // Função para enviar os dados para o back-end
  const handleSubmit = async (e) => {
    e.preventDefault();

    const pacienteData = {
      nomePaciente: nome + " " + sobrenome,
      cpf: cpf,
      numcontato: contatoEmergencia,
      statusalta: statusAlta,
      genero: genero,
      alergia: alergias,
    };

    try {
      // Enviar os dados para a API usando o axios
      const response = await axios.post("http://localhost:3000/paciente", pacienteData);

      if (response.status === 201) {
        alert("Paciente cadastrado com sucesso!");
        // Aqui você pode redirecionar ou limpar o formulário
      }
    } catch (error) {
      console.error("Erro ao cadastrar paciente:", error);
      alert("Erro ao cadastrar paciente");
    }
  };

  return (
    <div className={styles.page}>
      <NavBar />
      <div className={styles.content}>
        <form className={styles.inputs} onSubmit={handleSubmit}>
          <div className={styles.input_with_label}>
            <div className={styles.input_left}>
              <InputWithLabel
                label={"Nome"}
                placeholder={"Jane"}
                value={nome}
                onChange={(e) => setNome(e.target.value)} // Atualizar estado de 'nome'
              />
              <InputWithLabel
                label={"Sobrenome"}
                placeholder={"Smitherton"}
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)} // Atualizar estado de 'sobrenome'
              />
            </div>
            <div className={styles.input_right}>
              <InputCpfMask
                value={cpf}
                onChange={(e) => setCpf(e.target.value)} // Atualizar estado de 'cpf'
              />
              <InputWithLabel
                label={"Contato de Emergência"}
                placeholder={"(00) 9 0000-0000"}
                value={contatoEmergencia}
                onChange={(e) => setContatoEmergencia(e.target.value)} // Atualizar estado de 'contatoEmergencia'
              />
            </div>
          </div>

          <div className={styles.radios}>
            <div className={styles.status} id="status">
              <label htmlFor="status">Status de Alta</label>
              <div>
                <div>
                  <input
                    type="radio"
                    name="status"
                    id="1"
                    checked={statusAlta === true}
                    onChange={() => setStatusAlta(true)} // Atualizar 'statusAlta'
                  />
                  <label htmlFor="1">Sim</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="status"
                    id="0"
                    checked={statusAlta === false}
                    onChange={() => setStatusAlta(false)} // Atualizar 'statusAlta'
                  />
                  <label htmlFor="0">Não</label>
                </div>
              </div>
            </div>

            <div className={styles.gender} id="gender">
              <label htmlFor="gender">Gênero</label>
              <div>
                <div>
                  <input
                    type="radio"
                    name="gender"
                    id="men"
                    checked={genero === "masculino"}
                    onChange={() => setGenero("masculino")} // Atualizar 'genero'
                  />
                  <label htmlFor="men">Masculino</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="gender"
                    id="wom"
                    checked={genero === "feminino"}
                    onChange={() => setGenero("feminino")} // Atualizar 'genero'
                  />
                  <label htmlFor="wom">Feminino</label>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.alergia}>
            <InputWithLabel
              label={"Alergias"}
              placeholder={"Digite a alergia"}
              value={alergias}
              onChange={(e) => setAlergias(e.target.value)} // Atualizar estado de 'alergias'
            />
          </div>

          <div className={styles.textarea}>
            <Textarea
              tittle={"Observações adicionais(opcional)"}
              placeholder={"Digite informações adicionais sobre o paciente"}
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)} // Atualizar estado de 'observacoes'
            />
          </div>

          <div className={styles.save}>
            <button type="submit" className={styles.save_button}>Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
};
