import styles from "./SearchInput.module.css";
import { CiSearch } from "react-icons/ci";

export const SearchInput = ({ placeholder, value, onSubmit }) => {
  return (
    <>
      <form className={styles.search_input}>
        <input
          type="text"
          className={styles.input}
          placeholder={placeholder}
          defaultValue={value}
          onChange={(e) => {
            value = e.target.value();
          }}
        />
        <button className={styles.btn} onSubmit={onSubmit}>
          <CiSearch className={styles.icon} size={30} />
        </button>
      </form>
    </>
  );
};
