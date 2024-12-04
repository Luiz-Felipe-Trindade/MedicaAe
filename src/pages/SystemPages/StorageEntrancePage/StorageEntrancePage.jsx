import styles from "./StorageEntrancePage.module.css";  
import { NavBar } from "../../../components/NavBar/NavBar";  
import { InputWithLabel } from "../../../components/Inputs/InputWithLabel";  

export const StorageEntrancePage = () => {  
    const medicamentos = ["Aspirina","Amoxicilina","Concerta", "Dipirona", "Ibuprofeno", "Nimesulida", "Paracetamol", "Quetiapina", "Ritalina"];

    const handleSubmit = (e) => {  
        e.preventDefault();
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
                    </form>  

                    <div className={styles.rightInputContainer}>  
                        <InputWithLabel   
                            label={"Quantia"}   
                            placeholder={"Insira a quantidade do medicamento"}   
                        />  
                        <InputWithLabel   
                            label={"Dosagem"}   
                            placeholder={"Insira a dosagem (30mg, 100mg)"}   
                        />  
                        <div>
                            <button className={styles.button}>Salvar</button>
                        </div>
                    </div>  
                </div>  
            </div>  
        </div>  
    );  
};  
