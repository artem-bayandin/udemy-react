import React from 'react'

import styles from './Logo.module.css'

import logoPng from '../../assets/images/logo.png'

const Logo = (props) => <div className={styles.Logo}><img src={logoPng} alt="MyBurger" /></div>

export default Logo