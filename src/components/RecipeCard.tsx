import React from 'react';
import styles from '../styles/RecipeCard.module.scss';
import {
  nutritionFactsLength,
  recipeDetails,
} from '../config/RecipeCard.config';
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
      <p className={styles.nutritionTitle}>Nutrition</p>
      <p className={styles.nutritionDescription}>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div className={styles.nutritionTable}>
        {recipeDetails.nutritionFacts.map(({ title, value }, index) => (
          <div className={styles.rowWrapper} key={`${title}-${index}`}>
            <div className={styles.nutritionRow}>
              <p className={styles.nutritionRowTitle}>{title}</p>
              <p className={styles.nutritionRowValue}>{value}</p>
            </div>
            {nutritionFactsLength - 1 !== index && (
              <hr className={styles.tableDivider} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCard;
