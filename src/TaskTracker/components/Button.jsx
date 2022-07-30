import React from 'react';
import PropTypes from 'prop-types';



const Button = ({className, onBtnClick, showForm}) => {

  const style = {
    backgroundColor: showForm ?  "tomato" : "steelblue",
  }

  return (
    <button type = "button" 
    onClick= {(e) => onBtnClick(e)}
    style = {style}
    className={className}>
        {showForm ? "Close Form" : "Add Task"}
    </button>
  )
}

Button.defaultProps = {
    className : "Default attribute value",
    name : "Default attribute value",
}

Button.propTpyes = {
    className : PropTypes.string,
    name : PropTypes.string,
    onBtnClick : PropTypes.func.isRequired,
}

export default Button