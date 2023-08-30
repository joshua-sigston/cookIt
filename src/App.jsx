import { useState } from 'react';
import { useContext } from 'react';
import './App.css';
// components and pages
import Pages from './pages/Pages';
import Category from './components/Category';
import Search from './components/Search';
import Hamburger from './components/Hamburger';
// icons
import { BrowserRouter, Link } from 'react-router-dom';
import { GiCampCookingPot } from 'react-icons/gi';
// context
import RecipeProvider from './store/RecipeProvider';
import RecipeContext from './store/savedRecipe-context';

function App() {
  const [hamburger, setHamburger] = useState(false);
  const recipeCtx = useContext(RecipeContext);

  const handleToggleNav = () => {
    setHamburger((prevState) => !prevState);
  };

  const toggleNav = { left: !hamburger ? '100%' : '0' };

  return (
    <RecipeProvider>
      <main className="App">
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
          <Pages />
          <Hamburger handleToggleNav={handleToggleNav} />
        </BrowserRouter>
      </main>
    </RecipeProvider>
  );
}

export default App;
