import React, { useEffect } from 'react'

import styles from './Cockpit.module.css'

const Cockpit = props => {

    useEffect(() => {
        console.log('Cockpit :: useEffect :: empty effect')

        return () => console.log('Cockpit :: destroyed')
    })

    useEffect(() => {
        console.log('Cockpit :: useEffect :: empty array')
    }, [])

    useEffect(() => {
        console.log('Cockpit :: useEffect :: props.peopleCount')
    }, [props.peopleCount])

    const resetBtnStyles = [styles.button];
    if (props.peopleCount > 3) {
        resetBtnStyles.push(styles.combinedItalic)
    }
    if (props.peopleCount < 3) {
        resetBtnStyles.push(styles.combinedBold)
    }
    if (props.peopleCount < 1) {
        resetBtnStyles.push(styles.combinedRed)
    }

    return (
        <>
            <h1>hello, this is '{props.title}'</h1>
            <button
                key="resetBtn"
                onClick={props.setPeople}
                className={resetBtnStyles.join(' ')}
            >reset</button>
            <button
                key="addAgeToEverybodyBtn"
                onClick={props.addAgeToAll}
                className={styles.addAgeBtn}
            >add age to everybody</button>
            <button
                key="togglePeople"
                onClick={props.setViewPeople}
            >toggle view</button>
        </>
    )
}

export default React.memo(Cockpit) // tracks changes of input values // does not work??