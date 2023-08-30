import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';

import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

function Popular() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRandomRecipes();
  }, []);

  const getRandomRecipes = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${
        import.meta.env.VITE_KEY
      }&number=9`,
    );
    const data = await api.json();

    setRecipes(data.recipes);
  };

  return (
    <div>
      <Splide
        className="splide"
        options={{
          perPage: 4,
          breakpoints: { 375: { perPage: 1 }, 900: { perPage: 2 } },
          pagination: false,
          drag: 'free',
          arrows: false,
          gap: '1em',
        }}
      >
        {recipes.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Link to={'/recipe/' + recipe.id}>
                <div className="card">
                  <img src={recipe.image} alt="" />
                  <p>{recipe.title}</p>
                </div>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default Popular;
