import React from "react";
import styles from "./GameHistoryBoard.module.css";

const Table = ({ headers, children }) => {
  return (
    <table className={styles.gamehistoryboard__table}>
      <thead className={styles.gamehistoryboard__tablehead}>
        {headers.map((header, index) => {
          return <th key={`${header}-${index}`}>{header}</th>;
        })}
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
};

export default Table;
