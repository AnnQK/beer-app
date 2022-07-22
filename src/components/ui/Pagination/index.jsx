import React from 'react';
import styles from './Pagination.module.scss';

function Pagination({ currentPage, changePageHandler }) {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const pageClickHandler = (page) => {
    changePageHandler(page);
  };
  return (
    <ul className={styles.container}>
      {pages.map((item) => {
        return (
          <li
            onClick={() => pageClickHandler(item)}
            className={currentPage === item ? styles.active : styles.page}
            key={item}>
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default Pagination;
