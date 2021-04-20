import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'

function IceCreamContainer() {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>number of icecream- {numOfIceCreams}</h2>
            <button className="btn"
                onClick={()=>dispatch(buyIceCream())}
            >Buy icecream</button>
        </div>
    )
}

export default IceCreamContainer
