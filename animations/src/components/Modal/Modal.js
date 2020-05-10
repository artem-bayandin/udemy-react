import React from 'react'

import Transition from 'react-transition-group/Transition'

import './Modal.css'

const animationTiming = {
    enter: 200,
    exit: 1000
}

const modal = (props) => {
    return (
        <Transition
            in={props.show}
            timeout={animationTiming}
            mountOnEnter
            unmountOnExit
            onEnter={() => console.log('[Modal] 1.onEnter')}
            onEntering={() => console.log('[Modal] 2.onEntering')}
            onEntered={() => console.log('[Modal] 3.onEntered')}
            onExit={() => console.log('[Modal] 4.onExit')}
            onExiting={() => console.log('[Modal] 5.onExiting')}
            onExited={() => console.log('[Modal] 6.onExited')}
        >
            {state => {
                const cssClasses = [
                    'Modal', 
                    state === 'entering'
                        ? 'ModalOpen'
                        : state === 'exiting'
                            ? 'ModalClosed'
                            : null
                ]

                return (
                    <div className={cssClasses.join(' ')}>
                        <h1>A Modal</h1>
                        <button className="Button" onClick={props.closed}>Dismiss</button>
                    </div>
                )
            }}
        </Transition>
    )
}

export default modal