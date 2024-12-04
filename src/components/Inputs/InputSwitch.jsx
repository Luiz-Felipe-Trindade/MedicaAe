import { RiH3 } from "react-icons/ri";
import styles from "./InputSwitch.module.css";
import { useState } from "react";

export const InputSwitch = ({
  label,
  whenChecked,
  whenNotChecked,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.switch_container}>
      <label>{label}</label>
      <div>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleChange}
            {...rest}
          />
          <span className={styles.slider}></span>
        </label>
        <label>
          {isChecked ? (
            <label>{whenChecked}</label>
          ) : (
            <label>{whenNotChecked}</label>
          )}
        </label>
      </div>
    </div>
  );
};
