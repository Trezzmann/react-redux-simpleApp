import React from 'react'
import CakeContainer from './components/CakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import store from './redux/store'
import { Provider } from 'react-redux'

const App = () => {
 
    return (
        <Provider store={store}>
            <div className="container"> 
                <CakeContainer/>
                <IceCreamContainer/>
            </div>
        </Provider>
    )
}

export default App
