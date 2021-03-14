import Button from './Button'
import React from 'react'

const Header = ({title}) => {
    const onClink = (e) => console.log(e.target) 
    return (
        <div className="header">
            <h1>{title}</h1>
            <Button text="Add" handleClick={onClink}/>
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
