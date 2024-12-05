import styles from "./StorageEntrancePage.module.css";  
import { NavBar } from "../../../components/NavBar/NavBar";  
import { InputWithLabel } from "../../../components/Inputs/InputWithLabel";  
import axios from "axios"; 

export const StorageEntrancePage = () => {
    const medicamentos = [
        "Aspirina", "Amoxicilina", "Concerta", "Dipirona", 
        "Ibuprofeno", "Nimesulida", "Paracetamol", "Quetiapina", "Ritalina"
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        const idmedicamento = e.target.medicamento.value;
        const quantidade = e.target.quantidade.value;

        if (!idmedicamento || !quantidade) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const data = {
           idmedicamento,
            quantidade,
  
        };

        try {
            const response = await axios.post("http://localhost:3000/estoque/cadastrar", data);  // Supondo que a rota seja essa
            console.log("Medicamento adicionado ao estoque:", response.data);

            alert("Medicamento adicionado ao estoque com sucesso!");
        } catch (error) {
            console.error("Erro ao adicionar medicamento ao estoque:", error);
            alert("Houve um erro ao adicionar o medicamento ao estoque. Tente novamente.");
        }
    };

    return (  
        <div className={styles.container}>  
            <NavBar />  
            <div className={styles.subcontainer}>  
                <h2 className={styles.title}>Entrada Estoque</h2>  
                <div className={styles.inputsContainer}>  
                    <form onSubmit={handleSubmit} className={styles.form}>  
                        <div>
                            <label htmlFor="medicamento" className={styles.label}>Medicamento</label>
                            <input
                                id="medicamento"
                                name="medicamento"
                                list="medicamentos"
                                placeholder="Selecione um Medicamento"
                                className={styles.medinput}
                            />
                            <datalist id="medicamentos">
                                {medicamentos.map((medicamento, index) => (
                                    <option key={index} value={medicamento} />
                                ))}
                            </datalist>
                        </div>

                        <div>
                            <InputWithLabel   
                                label={"Quantidade"}   
                                placeholder={"Insira a quantidade do medicamento"}   
                                name="quantidade" 
                            />  
                        </div>

                        <div>
                            <button type="submit" className={styles.button}>Salvar</button>
                        </div>
                    </form>  
                </div>  
            </div>  
        </div>  
    );  
};
