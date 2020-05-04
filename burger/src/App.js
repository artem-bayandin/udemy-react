import React from 'react'

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Layout from './containers/Layout/Layout'

const App = (props) => {
    return (
        <Layout>
            <BurgerBuilder />
        </Layout>
    )
}

export default App