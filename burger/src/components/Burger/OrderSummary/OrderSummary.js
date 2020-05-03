import React from 'react'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(key => {
            return <li key={key}><span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}</li>
        })

    return (
        <>
            <h3>Your Order</h3>
            <p>You have added the next ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Total price: <b>${props.price.toFixed(2)}</b></p>
            <p>Continue to checkout?</p>
            <Button
                clicked={props.cancelPurchase}
                btnType='Danger'
            >cancel</Button>
            <Button
                clicked={props.continuePurchase}
                btnType='Success'
            >continue</Button>
        </>
    )
}

export default OrderSummary