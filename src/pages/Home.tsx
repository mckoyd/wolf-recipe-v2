import React from 'react';
import styles from '../styles/Home.module.scss';

import omeletteImg from '../assets/images/image-omelette.jpeg';
import HeroImg from '../components/HeroImg';
import RecipeCard from '../components/RecipeCard';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.recipeCard}>
        <HeroImg imgUrl={omeletteImg} />

        <RecipeCard />
      </div>
    </div>
  );
};

export default Home;
