import Button from './Button'
import React from 'react'

const Header = ({title, onAdd, showAdd}) => {
    
    return (
        <div className="header">
            <h1>{title}</h1>
            <Button text={showAdd ? 'Close':'Add'} color={showAdd ? 'red':'green'} handleClick={onAdd}/>
        </div>
    )
}


// css in JS
// const headingSyle = {
//     color:"red",
//     backgroundColor:"black"
// }


Header.defaultProps = {
    title: 'tasks tracker'
}

export default Header
