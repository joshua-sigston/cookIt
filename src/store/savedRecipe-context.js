import React from 'react';

const RecipeContext = React.createContext({
  recipes: [],
  addRecipe: (recipe) => {},
  removeRecipe: (recipe) => {},
});

export default RecipeContext;
