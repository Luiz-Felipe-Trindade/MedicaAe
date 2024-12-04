import React from 'react'
import styles from "./Modal.module.css"

export const Modal = ({children}) => {
  return (
    <div className={styles.black_container}>{children}</div>
  )
}
