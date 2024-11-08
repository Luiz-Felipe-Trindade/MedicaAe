import { PopUp } from "../../../../components/PopUp/PopUp"
import styles from "./FilterPopUp.module.css"
import { useState } from "react";

export const FilterPopUp = () => {
    [onClose, setOnClose] = useState(true)
  const handleOnClose = () => {
    setOnClose(!onClose);
  }
  return (
    <PopUp>
        <div className={styles.content}>
            <input type="text" />
        </div>
    </PopUp>
  )
}
