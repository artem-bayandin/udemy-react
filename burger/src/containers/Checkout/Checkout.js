import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'

import styles from './Checkout.module.css'
import ContactData from './ContactData/ContactData'

import { connect } from 'react-redux'

const Checkout = (props) => {
    const checkoutCancelled = () => {
        props.history.push('/');
    }

    const checkoutContinued = () => {
        props.history.replace('/checkout/contact-data')
    }

    return (
        <div>
            <CheckoutSummary
                onCheckoutCancelled={checkoutCancelled}
                onCheckoutContinued={checkoutContinued}
            />
            <Route
                path={props.match.url + '/contact-data'}
                component={ContactData}
                // render={(props) => (<ContactData ingredients={props.ingredients} price={props.price} {...props}/>)}
            />
        </div>
    )
}

const mapState = state => {
    return {
        ingredients: state.order.ingredients,
        price: state.order.totalPrice
    }
}

export default connect(mapState)(Checkout)