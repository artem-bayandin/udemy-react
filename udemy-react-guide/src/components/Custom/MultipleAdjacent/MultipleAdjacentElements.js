import React from 'react'

import styles from './MultipleAdjacentElements.module.css'

console.log(styles)

const MultipleAdjacentElements = () => [
    <div className={styles['multi-adjacent']} key="k1">first adjacent</div>,
    <div className={styles['multi-adjacent']} key="k2">second adjacent</div>,
    <div className={styles['multi-adjacent']} key="k3">third adjacent</div>
]

export default MultipleAdjacentElements