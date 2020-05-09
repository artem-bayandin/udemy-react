import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Layout from './containers/Layout/Layout'
import Checkout from './containers/Checkout/Checkout'

import { Route, Switch, Redirect } from 'react-router-dom'
import Orders from './containers/Orders/Orders'
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout/Logout'
import { authCheckState } from './store/actions'

const App = (props) => {
    useEffect(() => {
        props.checkAuth()
    }, [])

    return (
        <Layout>
            {
                props.isAuthenticated
                    ? (
                        <Switch>
                            <Route path="/checkout" component={Checkout} />
                            <Route path="/orders" component={Orders} />
                            <Route path="/logout" component={Logout} />
                            <Route path="/" exact component={BurgerBuilder} />
                            <Redirect to='/' />
                        </Switch>
                    ) : (
                        <Switch>
                            <Route path="/auth" component={Auth} />
                            <Redirect to='/auth' />
                        </Switch>
                    )
            }
        </Layout>
    )
}

const mapState = state => {
    return {
        isAuthenticated: !!state.auth.token
    }
}

const mapDispatch = dispatch => {
    return {
        checkAuth: () => dispatch(authCheckState())
    }
}

export default connect(mapState, mapDispatch)(App)