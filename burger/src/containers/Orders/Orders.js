import React, { useState, useEffect } from 'react'

import styles from './Orders.module.css'
import axios from '../../axios-orders-firebase'
import withErrorHandler from '../../hoc/withErrorHandling/withErrorHandler'
import Spinner from '../../components/UI/Spinner/Spinner'
import Order from '../../components/Order/Order'

const Orders = (props) => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('/orders.json')
            .then(resp => {
                const fetchedOrders = []
                for (let key in resp.data) {
                    fetchedOrders.push({
                        id: key,
                        ...resp.data[key]
                    })
                }
                setOrders(fetchedOrders)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return loading 
        ? <Spinner />
        : (
            <div className={styles.Orders}>
                {orders.map(order => <Order key={order.id} ingredients={order.ingredients} price={order.price} />)}
            </div>
        )
}

export default withErrorHandler(Orders, axios)