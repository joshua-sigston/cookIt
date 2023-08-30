import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Results from './Results';
import Recipe from './Recipe';
import SavedRecipes from '../components/SavedRecipes';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/search/:search" element={<Results />} />
        <Route path="/recipe/:name" element={<Recipe />} />
        <Route path="/saved-recipes" element={<SavedRecipes />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
