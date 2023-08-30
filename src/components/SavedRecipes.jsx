import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipeContext from '../store/savedRecipe-context';

function SavedRecipes() {
  const recipeCtx = useContext(RecipeContext);
  console.log(recipeCtx.recipes);

  return (
    <div className="grid saved_list_container">
      {recipeCtx.recipes.map((recipe) => {
        return (
          <Link to={'/recipe/' + recipe.id} key={recipe.id}>
            <div className="card" key={recipe.id}>
              <img src={recipe.image} alt={recipe.title} />
              <p>{recipe.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default SavedRecipes;
