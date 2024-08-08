import { NavLink } from "react-router-dom";

//styles
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <NavLink to={"/login"}>Entrar</NavLink>
      <NavLink to={"/register"}>Cadastrar</NavLink>
      <NavLink to={"/"}>MedicAê</NavLink>
    </nav>
  );
};

export default Navbar;
