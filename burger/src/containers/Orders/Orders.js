import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import styles from './Orders.module.css'
import axios from '../../axios-orders-firebase'
import withErrorHandler from '../../hoc/withErrorHandling/withErrorHandler'
import Spinner from '../../components/UI/Spinner/Spinner'
import Order from '../../components/Order/Order'

import { fetchOrdersAsync } from '../../store/actions'

const Orders = (props) => {
    useEffect(() => {
        props.fetchOrders(props.token, props.userId)
    }, [])

    return props.loading 
        ? <Spinner />
        : (
            <div className={styles.Orders}>
                {props.orders.map((order, index) => <Order key={index} ingredients={order.ingredients} price={order.price} />)}
            </div>
        )
}

const mapState = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatch = dispatch => {
    return {
        fetchOrders: (token, userId) => dispatch(fetchOrdersAsync(token, userId))
    }
}

export default connect(mapState, mapDispatch)(withErrorHandler(Orders, axios))