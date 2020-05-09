import React from 'react'

import styles from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) =>
    <ul className={styles.NavigationItems}>
        {props.isAuthenticated && <NavigationItem link="/">Burger Builder</NavigationItem>}
        {props.isAuthenticated && <NavigationItem link="/orders">Orders</NavigationItem>}
        {!props.isAuthenticated && <NavigationItem link="/auth">Auth</NavigationItem>}
        {props.isAuthenticated && <NavigationItem link="/logout">Logout</NavigationItem>}
    </ul>

export default NavigationItems