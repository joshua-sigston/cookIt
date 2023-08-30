import { useReducer } from 'react';

import RecipeContext from './savedRecipe-context';

const initialState = {
  recipes: [],
};

const recipeReducer = (state, action) => {
  if (action.type === 'ADD') {
    const newRecipe = action.recipe;
    let newList;

    let recipeExists = state.recipes.findIndex(
      (recipe) => recipe.id === newRecipe.id,
    );

    if (recipeExists < 0) {
      newList = [...state.recipes, newRecipe];
    } else {
      newList = [...state.recipes];
    }

    return {
      recipes: newList,
    };
  }

  return initialState;
};

const RecipeProvider = (props) => {
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  const addRecipe = (recipe) => {
    dispatch({ type: 'ADD', recipe: recipe });
  };

  const removeRecipe = (id) => {
    dispatch({ type: 'REMOVE', id: id });
  };

  const recipeContext = {
    recipes: state.recipes,
    addRecipe: addRecipe,
    removeRecipe: removeRecipe,
  };
  return (
    <RecipeContext.Provider value={recipeContext}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
