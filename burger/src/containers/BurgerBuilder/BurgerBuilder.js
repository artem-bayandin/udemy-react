import React, { useState, useEffect, useCallback } from "react"
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"

import axios from '../../axios-orders-firebase'
import Spinner from "../../components/UI/Spinner/Spinner"
import withErrorHandler from "../../hoc/withErrorHandling/withErrorHandler"

import { connect, useDispatch, useSelector } from 'react-redux'
import { addIngredient, removeIngredient, fetchIngredients, purchaseInit } from "../../store/actions/index"

export const BurgerBuilder = (props) => {
    const [btnsDisabled, setBtnsDisabled] = useState({
        salad: false,
        bacon: false,
        cheese: false,
        meat: false,
    })

    const [purchasable, setPurchasable] = useState(false)
    const [purchasing, setPurchasing] = useState(false)
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const addIng = name => dispatch(addIngredient(name))
    const remIng = name => dispatch(removeIngredient(name))
    const initIngredients = useCallback(() => dispatch(fetchIngredients()), [])
    const initPurchase = () => dispatch(purchaseInit())

    // the same could be done with { ... } and return { ... }
    const [ ingredients, price, isAuthenticated ] = useSelector(state => {
        return [
            state.burgerBuilder.ingredients,
            state.burgerBuilder.totalPrice,
            !!state.auth.token
        ]
    })

    useEffect(() => {
        initIngredients()
    }, [initIngredients])

    useEffect(() => {
        if (!ingredients) return

        setBtnsDisabled({
            salad: !ingredients.salad,
            bacon: !ingredients.bacon,
            cheese: !ingredients.cheese,
            meat: !ingredients.meat,
        })

        setPurchasable(ingredients.salad || ingredients.bacon || ingredients.cheese || ingredients.meat)
    }, [])

    const purchaseHandler = () => {
        if (isAuthenticated) {
            setPurchasing(true)
        } else {
            props.history.push('/auth', { returnUrl: '/checkout' })
        }
    }

    const purchaseCancelHandler = () => {setPurchasing(false)}

    const purchaseContinueHandler = () => {
        initPurchase()
        props.history.push('/checkout')
    }

    return (
        <>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                {
                    loading
                        ? <Spinner />
                        : ingredients
                            ? <OrderSummary
                                    ingredients={ingredients}
                                    cancelPurchase={purchaseCancelHandler}
                                    continuePurchase={purchaseContinueHandler}
                                    price={price}
                              />
                            : null
                }
            </Modal>
            {
                ingredients
                    ? 
                    <>
                        <Burger ingredients={ingredients} />
                        <BuildControls
                            ingredientAdded={addIng}
                            ingredientRemoved={remIng}
                            btnsDisabled={btnsDisabled}
                            price={price}
                            purchasable={purchasable}
                            purchase={purchaseHandler}
                            isAuthenticated={isAuthenticated}
                        />
                    </>
                    : <Spinner />
            }
        </>
    )
}

// const mapState = state => {
//     return {
//         ingredients: state.burgerBuilder.ingredients,
//         price: state.burgerBuilder.totalPrice,
//         isAuthenticated: !!state.auth.token
//     }
// }

// const mapDispatch = dispatch => {
//     return {
//         addIngredient: name => dispatch(addIngredient(name)),
//         remIngredient: name => dispatch(removeIngredient(name)),
//         initIngredients: () => dispatch(fetchIngredients()),
//         initPurchase: () => dispatch(purchaseInit())
//     }
// }

export default withErrorHandler(BurgerBuilder, axios)