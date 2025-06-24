import React from 'react';
import styles from '../styles/RecipeCard.module.scss';
import { recipeDetails } from '../config/RecipeCard.config';
import PrepTimeSection from './PrepTimeSection';

const RecipeCard: React.FC = () => {
  return (
    <div className={styles.recipeDetailsWrapper}>
      <p className={styles.recipeName}>{recipeDetails.name}</p>
      <p className={styles.recipeDescription}>{recipeDetails.description}</p>

      <PrepTimeSection />

      <p className={styles.ingredientsTitle}>Ingredients</p>
      <ul className={styles.ingredientsList}>
        {recipeDetails.ingredientsList.map((ingredient, index) => (
          <li
            className={styles.ingredientWrapper}
            key={`${ingredient}-${index}`}
          >
            <p className={styles.ingredientItem}>{ingredient}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeCard;
