import React from 'react'

import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../Logo/Logo'

import styles from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

const SideDrawer = (props) => {
    const attachedClasses = [styles.SideDrawer]

    if (props.show) {
        attachedClasses.push(styles.Open)
    } else {
        attachedClasses.push(styles.Close)
    }

    return (
        <>
            <Backdrop show={props.show} clicked={props.closed} />
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems
                        isAuthenticated={props.isAuthenticated}
                        logout={props.logout}
                    />
                </nav>
            </div>
        </>
    )
}

export default SideDrawer