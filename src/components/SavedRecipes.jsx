import React from 'react'
import { Link } from 'react-router-dom'

function SavedRecipes({recipeList}) {
   
  return (
    <div className="grid saved_list_container">
        {recipeList.map((recipe) => {
            return (
                <Link to={'/recipe/' + recipe.id} key={recipe.id}>
                    <div className='card' key={recipe.id}>
                        <img src={recipe.image} alt={recipe.title} />
                        <p>{recipe.title}</p>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}

export default SavedRecipes
