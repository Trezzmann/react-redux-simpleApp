import React from 'react'
import CakeContainer from './components/CakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import UserContainer from './components/UserContainer'
import store from './redux/store'
import { Provider } from 'react-redux'

const App = () => {
 
    return (
        <Provider store={store}>
            <div className="container"> 
                <CakeContainer/>
                <IceCreamContainer/>
                <UserContainer/>
            </div>
        </Provider>
    )
}

export default App
