import React from 'react'

import styles from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const Toolbar = (props) => {

    return (
        <header className={styles.Toolbar}>
            <DrawerToggle clicked={props.openMenu} />
            <div className={styles.Logo}>
                <Logo />
            </div>
            <nav className={styles.DesktopOnly}>
                <NavigationItems
                    isAuthenticated={props.isAuthenticated}
                    logout={props.logout}
                />
            </nav>
        </header>
    )
}

export default Toolbar