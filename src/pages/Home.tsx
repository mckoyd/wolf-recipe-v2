import React from 'react';
import styles from '../styles/Home.module.scss';

import omeletteImg from '../assets/images/image-omelette.jpeg';
import { recipeDetails } from '../config/Home.config';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.recipeCard}>
        <div className={styles.heroImgWrapper}>
          <img
            src={omeletteImg}
            alt="A picture of an omlette"
            className={styles.heroImg}
          />
        </div>

        <div className={styles.recipeDetailsWrapper}>
          <p className={styles.recipeName}>{recipeDetails.name}</p>
          <p className={styles.recipeDescription}>
            {recipeDetails.description}
          </p>

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
        </div>
      </div>
    </div>
  );
};

export default Home;
