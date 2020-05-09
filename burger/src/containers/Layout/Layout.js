import React, { useState } from 'react'
import { connect } from 'react-redux'

import styles from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import { logout } from '../../store/actions'

const Layout = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false)

    const showSideDrawerHandler = () => setShowSideDrawer(true)

    const hideSideDrawerHandler = () => setShowSideDrawer(false)

    return (
        <>
            <Toolbar
                openMenu={showSideDrawerHandler}
                isAuthenticated={props.isAuthenticated}
                logout={props.logout}
            />
            <SideDrawer
                show={showSideDrawer}
                closed={hideSideDrawerHandler}
                isAuthenticated={props.isAuthenticated}
                logout={props.logout}
            />
            <main className={styles.content}>
                {props.children}
            </main>
        </>
    )
}

const mapState = state => {
    return {
        isAuthenticated: !!state.auth.token
    }
}

const mapDispatch = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapState, mapDispatch)(Layout)