import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

function CakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>number of cakes - {numOfCakes}</h2>
            <button className="btn"
                onClick={()=>dispatch(buyCake())}
            >Buy cake</button>
        </div>
    )
}

export default CakeContainer
