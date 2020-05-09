import React, { useState, useEffect } from 'react'
import Button from '../../../components/UI/Button/Button'

import axios from '../../../axios-orders-firebase'

import styles from './ContactData.module.css'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Inputs/Input'

import { connect } from 'react-redux'
import { clearOrderAsync, purchaseOrderAsync } from '../../../store/actions/index'
import withErrorHandler from '../../../hoc/withErrorHandling/withErrorHandler'
import { Redirect } from 'react-router'
import { validateInput } from '../../../shared/uivalidation'

const ContactData = (props) => {
    const [formData, setFormData] = useState({})
    const [formIsValid, setFormIsValid] = useState(false)

    useEffect(() => {
        const formState = {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: 'John Doe',
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
                value: props.email,
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
                value: 'Lenina 1',
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
                value: 'A65F99',
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
        }
        setFormData(formState)
        validateForm(formState)
    }, [])

    const orderHandler = (ev) => {
        ev.preventDefault()

        let hasAnyIngredient = false
        for (var key in props.ingredients) {
            if (props.ingredients[key] > 0) {
                hasAnyIngredient = true
                break
            }
        }
        if (!hasAnyIngredient) {
            console.log('no ingredients found')
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

            userId: props.userId,
            userName: formData.name.value,
            userEmail: formData.email.value
        }
        props.purchaseOrder(order, props.token)
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

        setFormData(newState)
        validateForm(newState)
    }

    const validateForm = (state) => {
        let validForm = true
        for (let key in state) {
            state[key].isValid = validateInput(state[key].value, state[key].validationRules)
            if (state[key].isValid === undefined) continue
            validForm = validForm && state[key].isValid
        }
        setFormIsValid(validForm)
    }

    return (
        <div className={styles.ContactData}>
            <h4>Enter your contact data</h4>
            {props.purchased && <Redirect to='/' />}
            {
                props.loading ? <Spinner />
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

const mapState = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        purchased: state.order.purchased,
        token: state.auth.token,
        userId: state.auth.userId,
        email: state.auth.email
    }
}

const mapDispatch = dispatch => {
    return {
        clearOrder: () => dispatch(clearOrderAsync()),
        purchaseOrder: (order, token) => dispatch(purchaseOrderAsync(order, token))
    }
}

export default connect(mapState, mapDispatch)(withErrorHandler(ContactData, axios))