import React from 'react'

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
            <p>Continue to checkout?</p>
        </>
    )
}

export default OrderSummary