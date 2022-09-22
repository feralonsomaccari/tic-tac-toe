import React from 'react'
import styles from "./Menu.module.css";

const Button = ({disabled, children}) => <button className={`${styles.menu__button} ${disabled && styles['menu__boton--disabled']}`}>{children}</button>

export default Button