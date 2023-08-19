import { useState } from 'react'
import './App.css';
// components and pages
import Pages from './pages/Pages';
import Category from './components/Category';
import Search from './components/Search';
import Hamburger from './components/Hamburger';

import { BrowserRouter, Link } from 'react-router-dom';
import { GiCampCookingPot } from 'react-icons/gi';

function App() {
  const [hamburger, setHamburger] = useState(false);
  const [recipeList, setRecipeList] = useState([]);

  const handleToggleNav = () => {
    setHamburger((prevState) => !prevState);
  };

  const toggleNav = { left: !hamburger ? '100%' : '0' };

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <div className="left_col">
            <Link to={'/'}>
              <GiCampCookingPot className="logo" />
            </Link>
            <Link to={'/saved-recipes'}>
              <h3>See Saved Recipes</h3>
            </Link>
          </div>
          <div className="right_col">
            <Search />
          </div>
        </header>
        <Category handleToggleNav={handleToggleNav} style={toggleNav} />
        <Pages recipeList={recipeList} setRecipeList={setRecipeList} />
        <Hamburger handleToggleNav={handleToggleNav} />
      </BrowserRouter>
    </div>
  )
}

export default App
