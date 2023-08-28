import React from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

function Category(props) {
  const handleHamburger = () => {
    props.handleToggleNav();
  };

  return (
    <div className="nav" style={props.style}>
      <NavLink
        to={'/cuisine/Italian'}
        className="link"
        onClick={handleHamburger}
      >
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink
        to={'/cuisine/American'}
        className="link"
        onClick={handleHamburger}
      >
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink to={'/cuisine/Thai'} className="link" onClick={handleHamburger}>
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink
        to={'/cuisine/German'}
        className="link"
        onClick={handleHamburger}
      >
        <GiChopsticks />
        <h4>German</h4>
      </NavLink>
    </div>
  );
}

export default Category;
