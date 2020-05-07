import React from 'react'

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

import styles from './CheckoutSummary.module.css'

import { connect } from 'react-redux'

const CheckoutSummary = (props) => {
    return (
        <div className={styles.CheckoutSummary}>
            <h1>We hope it tastes well</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button
                btnType='Danger'
                clicked={props.onCheckoutCancelled}
            >cancel</Button>
            <Button
                btnType='Success'
                clicked={props.onCheckoutContinued}
            >continue</Button>
        </div>
    )
}

const mapState = state => {
    return {
        ingredients: state.ingredients
    }
}

export default connect(mapState)(CheckoutSummary)