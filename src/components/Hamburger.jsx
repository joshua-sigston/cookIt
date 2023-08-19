import React from 'react'

function Hamburger(props) {
    const handleHamburger = () => {
        props.handleToggleNav()
    }
    
  return (
    <div className='hamburger_container'>
        <div className="hamburger" onClick={handleHamburger}>
            <div className="patty one"></div>
            <div className="patty two"></div>
            <div className="patty three"></div>
        </div>
    </div>
  )
}

export default Hamburger
