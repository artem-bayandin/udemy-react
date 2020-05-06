import React, { useState, useEffect } from 'react'
import Button from '../../../components/UI/Button/Button'

import axios from '../../../axios-orders-firebase'

import styles from './ContactData.module.css'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Inputs/Input'

const ContactData = (props) => {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({})
    const [formIsValid, setFormIsValid] = useState(false)

    useEffect(() => {
        setFormData({
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: '',
                isValid: false,
                validationRules: {
                    required: true
                },
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email'
                },
                value: '',
                isValid: false,
                validationRules: {
                    required: true,
                    minLength: 8
                },
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                isValid: false,
                validationRules: {
                    required: true
                },
                touched: false
            },
            postalCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Postal code'
                },
                value: '',
                isValid: false,
                validationRules: {
                    required: true
                },
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [ {
                        value: 'fastest',
                        displayName: 'Fastest'
                    }, {
                        value: 'cheapest',
                        displayName: 'Cheapest'
                    } ]
                },
                value: 'fastest'
            }
        })
    }, [])

    const orderHandler = (ev) => {
        ev.preventDefault()

        if (typeof price !== 'number' || Object.keys(props.ingredients).length === 0) {
            console.log('some data is incorrect')
            return
        }

        const order = {
            ingredients: {...props.ingredients},
            price: props.price.toFixed(2),
            customer: formData.name.value,
            address: {
                street: formData.street.value,
                postalCode: formData.postalCode.value
            },
            email: formData.email.value
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

    const inputChanged = (ev) => {
        ev.preventDefault()
        const target = ev.target
        
        // const newState = {...formData}
        // const newValue = {...newState[target.name]}
        // newValue.value = target.value
        // newState[target.name] = newValue

        const newState = {...formData}
        newState[target.name].value = target.value
        newState[target.name].touched = true
        newState[target.name].isValid = validate(target.name, newState[target.name].value, newState[target.name].validationRules)

        setFormData(newState)

        let validForm = true
        for (let key in newState) {
            if (newState[key].isValid === undefined) continue
            validForm = validForm && newState[key].isValid
        }
        setFormIsValid(validForm)
    }

    const validate = (key, value, rules) => {
        if (!formData[key].validationRules) return true

        if (!rules) return true

        let isValid = true

        if (rules.required === true) {
            isValid = isValid && !!value.trim()
        }

        if (rules.minLength) {
            isValid = isValid && value.trim().length >= rules.minLength
        }

        return isValid
    }

    return (
        <div className={styles.ContactData}>
            <h4>Enter your contact data</h4>
            {
                loading ? <Spinner />
                        : (
                    <form onSubmit={orderHandler}>
                        {
                            Object.keys(formData).map(key => {
                                return (
                                    <Input
                                        key={key}
                                        name={key}
                                        inputtype={formData[key].elementType}
                                        elementConfig={formData[key].elementConfig}
                                        value={formData[key].value}
                                        isValid={formData[key].isValid}
                                        touched={formData[key].touched}
                                        changed={inputChanged}
                                    />
                                )
                            })
                        }
                        <Button btnType="Success" clicked={orderHandler} disabled={!formIsValid}>submit</Button>
                    </form>
                )
            }
        </div>
    )
}

export default ContactData