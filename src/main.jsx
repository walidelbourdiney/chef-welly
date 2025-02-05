import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "./ai.js";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    
  ]);
  const [getRecipe, setGetRecipe] = React.useState(false);

  async function toggleRecipeShown() {
    const recipeResult = await getRecipeFromMistral(ingredients);
    
    setGetRecipe(recipeResult);
  }

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  const addIngredient = React.useCallback((formData) => {
    const newIngredient = formData.get("ingredient");
    if (!newIngredient) return;
    setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
  }, []);

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
          required
        />
        <button>Add ingredient</button>
      </form>
      <IngredientsList
        ingredients={ingredients}
        ingredientsListItems={ingredientsListItems}
        toggleRecipeShown={toggleRecipeShown}
      />
      <ClaudeRecipe getRecipe={getRecipe} />
    </main>
  );
}
