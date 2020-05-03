import React, { useEffect, useRef } from 'react'

import styles from './Cockpit.module.css'

const Cockpit = props => {
    // ref
    const togglePeopleBtnRef = useRef(null)

    useEffect(() => {
        console.log('Cockpit :: useEffect :: empty effect')

        return () => console.log('Cockpit :: cleared')
    })

    useEffect(() => {
        console.log('Cockpit :: useEffect :: empty array')
    }, [])

    useEffect(() => {
        console.log('Cockpit :: useEffect :: props.peopleCount')
    }, [props.peopleCount])

    useEffect(() => {
        console.log('i will toggle people view in a second')
        setTimeout(() => {
            togglePeopleBtnRef.current.click()
            console.log('people view toggled')
        }, 1000);
    }, [])

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
                ref={togglePeopleBtnRef}
                onClick={props.setViewPeople}
            >toggle view</button>
        </>
    )
}

export default React.memo(Cockpit) // tracks changes of input values // does not work??