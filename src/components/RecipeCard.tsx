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
      <hr className={styles.divider} />
      <p className={styles.instructionsTitle}>Instructions</p>
      <ol className={styles.instructions}>
        {recipeDetails.instructions.map(({ boldedText, text }, index) => (
          <li className={styles.instructionWrapper} key={`${index}`}>
            <p className={styles.instruction}>
              <span className={styles.bolded}>{boldedText}</span>
              {text}
            </p>
          </li>
        ))}
      </ol>
      <hr className={styles.divider} />
    </div>
  );
};

export default RecipeCard;
