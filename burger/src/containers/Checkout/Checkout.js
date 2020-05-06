import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'

import styles from './Checkout.module.css'
import ContactData from './ContactData/ContactData'

const Checkout = (props) => {
    const [ingredients, setIngredients] = useState({})
    const [price, setPrice] = useState({})

    useEffect(() => {
        if (props.location.state) {
            setIngredients(props.location.state.ingredients)
            setPrice(props.location.state.price)
        }
    }, [props.location.state])

    const checkoutCancelled = () => {
        props.history.push('/', ingredients);
    }

    const checkoutContinued = () => {
        props.history.replace('/checkout/contact-data')
    }

    return (
        <div>
            <CheckoutSummary
                ingredients={ingredients}
                onCheckoutCancelled={checkoutCancelled}
                onCheckoutContinued={checkoutContinued}
            />
            <Route
                path={props.match.url + '/contact-data'}
                // component={ContactData}
                render={(props) => (<ContactData ingredients={ingredients} price={price} {...props}/>)}
            />
        </div>
    )
}

export default Checkout