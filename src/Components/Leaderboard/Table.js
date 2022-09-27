import React from "react";
import styles from "./Leaderboard.module.css";

const Table = ({ headers, children }) => {
  return (
    <table className={styles.leaderboard__table}>
      <thead className={styles.leaderboard__tablehead}>
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
