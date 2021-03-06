import React from 'react'

import styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const BuildControls = (props) => {
    return (
        <div className={styles.BuildControls}>
            <p>Price: <b>${props.price.toFixed(2)}</b></p>
            { controls.map(item => {
                return <BuildControl
                            key={item.label}
                            label={item.label}
                            added={() => props.ingredientAdded(item.type)}
                            removed={() => props.ingredientRemoved(item.type)}
                            disabled={props.btnsDisabled[item.type]}
                        />
            }) }
            <button
                className={styles.OrderButton}
                disabled={!props.purchasable}
                onClick={props.purchase}
            >{props.isAuthenticated ? 'order now' : 'sign up to order'}</button>
        </div>
    )
}

export default BuildControls