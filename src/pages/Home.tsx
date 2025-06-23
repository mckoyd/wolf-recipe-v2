import React from 'react';
import styles from '../styles/Home.module.scss';

import omeletteImg from '../assets/images/image-omelette.jpeg';

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
      </div>
    </div>
  );
};

export default Home;
