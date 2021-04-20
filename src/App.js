import React from 'react'
import CakeContainer from './components/CakeContainer'
import store from './redux/store'
import { Provider } from 'react-redux'

const App = () => {
 
    return (
        <Provider store={store}>
            <div className="container"> 
                <CakeContainer/>
            </div>
        </Provider>
    )
}

export default App
