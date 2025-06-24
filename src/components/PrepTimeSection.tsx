import React from 'react';
import styles from '../styles/PrepTimeSection.module.scss';

const PrepTimeSection: React.FC = () => {
  return (
    <div className={styles.prepWrapper}>
      <p className={styles.prepTitle}>Preparation time</p>
      <ul className={styles.prepItems}>
        <li>
          <p className={styles.prepDescription}>
            <span className={styles.bolded}>Total:</span> Approximately 10
            minutes
          </p>
        </li>
        <li>
          <p className={styles.prepDescription}>
            <span className={styles.bolded}>Preparation:</span> 5 minutes
          </p>
        </li>
        <li>
          <p className={styles.prepDescription}>
            <span className={styles.bolded}>Cooking:</span> 5 minutes
          </p>
        </li>
      </ul>
    </div>
  );
};

export default PrepTimeSection;
