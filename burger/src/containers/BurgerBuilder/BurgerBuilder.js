import React, { useState, useEffect } from "react"
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"

import axios from '../../axios-orders-firebase'
import Spinner from "../../components/UI/Spinner/Spinner"
import withErrorHandler from "../../hoc/withErrorHandling/withErrorHandler"

import { connect } from 'react-redux'
import { addIngredientAsync, removeIngredientAsync } from "../../store/actions/order"

const BurgerBuilder = (props) => {
    const [btnsDisabled, setBtnsDisabled] = useState({
        salad: false,
        bacon: false,
        cheese: false,
        meat: false,
    })

    const [purchasable, setPurchasable] = useState(false)
    const [purchasing, setPurchasing] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!props.ingredients) return

        setBtnsDisabled({
            salad: !props.ingredients.salad,
            bacon: !props.ingredients.bacon,
            cheese: !props.ingredients.cheese,
            meat: !props.ingredients.meat,
        })

        setPurchasable(props.ingredients.salad || props.ingredients.bacon || props.ingredients.cheese || props.ingredients.meat)
    }, [
        props.ingredients
    ])

    const purchaseHandler = () => setPurchasing(true)

    const purchaseCancelHandler = () => {setPurchasing(false)}

    const purchaseContinueHandler = () => {
        props.history.push('/checkout')
    }

    return (
        <>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                {
                    loading
                        ? <Spinner />
                        : props.ingredients
                            ? <OrderSummary
                                    ingredients={props.ingredients}
                                    cancelPurchase={purchaseCancelHandler}
                                    continuePurchase={purchaseContinueHandler}
                                    price={props.price}
                              />
                            : null
                }
            </Modal>
            {
                props.ingredients
                    ? 
                    <>
                        <Burger ingredients={props.ingredients} />
                        <BuildControls
                            ingredientAdded={props.addIngredient}
                            ingredientRemoved={props.remIngredient}
                            btnsDisabled={btnsDisabled}
                            price={props.price}
                            purchasable={purchasable}
                            purchase={purchaseHandler}
                        />
                    </>
                    : <Spinner />
            }
        </>
    )
}

const mapState = state => {
    console.log(state)
    return {
        ingredients: state.order.ingredients,
        price: state.order.totalPrice
    }
}

const mapDispatch = dispatch => {
    return {
        addIngredient: name => dispatch(addIngredientAsync(name)),
        remIngredient: name => dispatch(removeIngredientAsync(name))
    }
}

export default connect(mapState, mapDispatch)(withErrorHandler(BurgerBuilder, axios))
