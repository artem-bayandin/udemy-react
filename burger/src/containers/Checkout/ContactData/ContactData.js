import React, { useState } from 'react'
import Button from '../../../components/UI/Button/Button'

import axios from '../../../axios-orders-firebase'

import styles from './ContactData.module.css'
import Spinner from '../../../components/UI/Spinner/Spinner'

const ContactData = (props) => {
    const [contactData, setContactData] = useState({})
    const [loading, setLoading] = useState(false)

    const orderHandler = (ev) => {
        ev.preventDefault()

        const order = {
            ingredients: props.ingredients,
            price: props.price.toFixed(2),
            customer: 'John Doe',
            address: {
                contry: 'UK',
                city: 'London'
            },
            email: 'mail@gmail.com'
        }

        console.log(order)
        setLoading(true)
        axios.post('/orders.json', order)
            .then(resp => {
                console.log('saved', resp)
            })
            .catch(err => {
                console.log('saved err', err)
            })
            .finally(() => {
                setLoading(false)
                console.log('order created')
                props.history.push('/orders')
            })
    }

    return (
        <div className={styles.ContactData}>
            <h4>Enter your contact data</h4>
            {
                loading ? <Spinner />
                        : (
                    <form>
                        <input type="text" name="name" placeholder="Your Name" />
                        <input type="email" name="email" placeholder="Your Name" />
                        <input type="text" name="street" placeholder="Street" />
                        <input type="text" name="postalCode" placeholder="Postal Code" />

                        <Button btnType="Success" clicked={orderHandler}>submit</Button>
                    </form>
                )
            }
        </div>
    )
}

export default ContactData