import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Recipe({ recipeList, setRecipeList }) {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');

  let params = useParams();

  const recipeDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${import.meta.env.VITE_KEY}`,
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    recipeDetails();
  }, [params.name]);

  const handleInstructions = () => {
    setActiveTab('instructions');
  };

  const handleIngredients = () => {
    setActiveTab('ingredients');
  };

  const handleSaveRecipe = (e) => {
    setRecipeList((prevState) => {
      return [...prevState, details];
    });
  };

  return (
    <div className="details_container">
      <div className="left_col">
        <h3>{details.title}</h3>
        <img src={details.image} alt="" />
      </div>
      <div className="right_col">
        <div className="btns_container">
          <button
            onClick={handleInstructions}
            className={activeTab === 'instructions' ? 'instructions' : ''}
          >
            Instructions
          </button>
          <button
            onClick={handleIngredients}
            className={activeTab === 'ingredients' ? 'ingredients' : ''}
          >
            Ingredients
          </button>
          <button onClick={handleSaveRecipe} id={details.id}>
            Save Recipe
          </button>
        </div>
        {activeTab === 'instructions' && (
          <div className="instructions_container">
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <div className="ingredients_container">
            <ul>
              {details.extendedIngredients.map((item) => {
                return (
                  <li key={item.id} className="list_item">
                    {item.original}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Recipe;
