import React, { useEffect, Suspense } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'

import { authCheckState } from './store/actions'
import WithLoading from './hoc/WithLoading/WithLoading'

import Layout from './containers/Layout/Layout'

const Checkout = React.lazy(() => import('./containers/Checkout/Checkout'))
const Orders = React.lazy(() => import('./containers/Orders/Orders'))
const Auth = React.lazy(() => import('./containers/Auth/Auth'))
const Logout = React.lazy(() => import('./containers/Auth/Logout/Logout'))
const BurgerBuilder = React.lazy(() => import('./containers/BurgerBuilder/BurgerBuilder'))

const App = (props) => {
    const { checkAuth } = props
    useEffect(() => {
        checkAuth()
    }, [checkAuth])

    return (
        <Layout>
            {
                props.isAuthenticated
                    ? (
                        <Switch>
                            <Route path="/checkout" render={(props) => <WithLoading><Checkout {...props} /></WithLoading>} />
                            <Route path="/orders" render={(props) => <WithLoading><Orders {...props} /></WithLoading>} />
                            <Route path="/logout" render={(props) => <WithLoading><Logout {...props} /></WithLoading>} />
                            <Route path="/" exact render={(props) => <WithLoading><BurgerBuilder {...props} /></WithLoading>} />
                            <Redirect to='/' />
                        </Switch>
                    ) : (
                        <Switch>
                            <Route path="/auth" render={(props) => <WithLoading><Auth {...props} /></WithLoading>} />
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