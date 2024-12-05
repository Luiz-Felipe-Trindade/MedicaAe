import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./StoragePage.module.css";
import { NavBar } from "../../../components/NavBar/NavBar";
import { NavLink } from "react-router-dom";
import { Filter } from "./components/Filter/Filter";

export const StoragePage = () => {
  const [estoque, setEstoque] = useState([]); // Estado para armazenar os dados do estoque
  const [error, setError] = useState(null);

  const fetchEstoque = async () => {
    try {
      const response = await axios.get("http://localhost:3000/estoque/all");
      setEstoque(response.data); 
    } catch (err) {
      setError("Erro ao carregar dados do estoque");
    }
  };

  useEffect(() => {
    fetchEstoque(); 
  }, []);

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.content}>
        <div className={styles.box}>
          <Filter />
          <label>Estoque de medicamentos</label>
          <div className={styles.iten_box}>
            {error && <p>{error}</p>}
            {estoque.length > 0 ? (
              estoque.map((item) => (
                <div key={item.idestoque} className={styles.iten}>
                  <p>ID Estoque: {item.idestoque}</p>
                  <p>ID Medicamento: {item.idmed}</p>
                  <p>Quantidade: {item.qtdmedicamento}</p>
                </div>
              ))
            ) : (
              <p>Nenhum medicamento no estoque</p>
            )}
          </div>
        </div>
        <NavLink className={styles.button} to={"/storage/entrance"}>
          Adicionar Medicamento
        </NavLink>
      </div>
    </div>
  );
};
