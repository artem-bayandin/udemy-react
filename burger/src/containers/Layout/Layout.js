import React, { useState } from 'react'

import styles from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

const Layout = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false)

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