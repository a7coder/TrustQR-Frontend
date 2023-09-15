import React from 'react';
import styles from './loading.module.css'; // Import your CSS file

export default function Loading() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <div className={styles.loaderCircle}></div>
      </div>
    </div>
  );
}
