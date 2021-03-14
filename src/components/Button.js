import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, text , handleClick }) => {
    return (
        <button style={{backgroundColor:color}} className="btn" onClick={handleClick}>{text}</button>
    )
}

Button.propTypes = {
    text :PropTypes.string
}

Button.defaultProps = {
    color : "green",
    text : "Adding"
}

export default Button
