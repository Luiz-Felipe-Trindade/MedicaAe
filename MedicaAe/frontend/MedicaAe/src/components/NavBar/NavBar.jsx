import { useAuth } from "../../context/AuthProvider";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

//icons
import { LuHome } from "react-icons/lu";
import { BiBookmark } from "react-icons/bi";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { FiLogOut } from "react-icons/fi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BsClipboard2Check } from "react-icons/bs";

export const NavBar = () => {
  const { isAuthenticated, login, logout } = useAuth();
  return (
    <div className={styles.main_box}>
      <nav className={styles.main_column}>
        <div className={styles.logo}>MedicAê</div>
        <div className={styles.links}>
          <div className={styles.button_links}>
            <NavLink to={"/dashboard"} className={styles.link}>
              <LuHome className={styles.icons} />
              Início
            </NavLink>
            <NavLink to={"/medicines"} className={styles.link}>
              <BiBookmark className={styles.icons} />
              Medicamentos
            </NavLink>
            <NavLink to={"/treatment"} className={styles.link}>
              <BsClipboard2Check className={styles.icons} />
              Tratamentos
            </NavLink>
            <NavLink to={"/patients"} className={styles.link}>
              <MdOutlinePeopleAlt className={styles.icons} />
              Pacientes
            </NavLink>
            <NavLink to={"/storage"} className={styles.link}>
              <HiOutlineArchiveBox className={styles.icons} />
              Estoque
            </NavLink>
            <NavLink to={"/configs"} className={styles.link}>
              <HiOutlineCog8Tooth className={styles.icons} />
              Configurações
            </NavLink>
          </div>
          <div className={styles.logout}>
            <NavLink to={"/"} onClick={logout} className={styles.link}>
              <FiLogOut className={styles.icons} />
              Logout
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};
