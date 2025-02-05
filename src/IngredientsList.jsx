import React from "react";

const IngredientsList = (props) => {
  return (
    <>
      {props.ingredients.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {props.ingredientsListItems}
          </ul>
          {props.ingredients.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={props.toggleRecipeShown}>Get a recipe</button>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default IngredientsList;
