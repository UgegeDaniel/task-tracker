import React from 'react';
import PropTypes from 'prop-types';
//import {useLocation} from 'react-router-dom'

import Button from './Button'

const Header = ({title, onBtnClick, showForm}) =>{
 //const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>

      <Button 
      onBtnClick ={onBtnClick}
      className="btn" 
      showForm = {showForm}
      />
      
    </header>
  )
}

Header.defaultProps = {
    title : "Default attribute value",
}

Header.propTpyes = {
    title : PropTypes.string,
    onPropClick : PropTypes.func.isRequired
}

/*
const headingStyles = {
    marginLeft:"50%", 
    color:"red"
}

style = {headingStyles}
*/

export default Header