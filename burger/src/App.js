import React from 'react'

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Layout from './containers/Layout/Layout'
import Checkout from './containers/Checkout/Checkout'

import { Route } from 'react-router-dom'
import Orders from './containers/Orders/Orders'

const App = (props) => {
    return (
        <Layout>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
        </Layout>
    )
}

export default App