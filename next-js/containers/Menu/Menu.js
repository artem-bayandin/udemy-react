import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

import styles from './Menu.module.css'

const Menu = props => {
    return (
        <nav className={styles.MenuNav}>
            <ul>
                <li><Link href='/'><a>home</a></Link></li>
                <li>go to <Link href='/auth'><a>auth:index</a></Link></li>
                <li>go to <Link href='/auth/user'><a>auth:user</a></Link></li>
                <li><button onClick={() => Router.push('/auth')}>go to auth</button></li>
                <li><button onClick={() => Router.push('/auth/user')}>go to auth:user</button></li>
                <li><Link href='/abrakadabra'><a>404 error</a></Link></li>
            </ul>
        </nav>
    )
}

export default Menu