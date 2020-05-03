import React, { useState } from 'react'

import styles from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const Layout = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(true)

    const showSideDrawerHandler = () => setShowSideDrawer(true)

    const hideSideDrawerHandler = () => setShowSideDrawer(false)

    return (
        <>
            <Toolbar openMenu={showSideDrawerHandler}/>
            <SideDrawer show={showSideDrawer} closed={hideSideDrawerHandler} />
            <main className={styles.content}>
                {props.children}
            </main>
        </>
    )
}

export default Layout