import React, { useState, useEffect } from "react"
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"

import axios from '../../axios-orders-firebase'
import Spinner from "../../components/UI/Spinner/Spinner"
import withErrorHandler from "../../hoc/withErrorHandling/withErrorHandler"

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3,
}

const BurgerBuilder = (props) => {
    const [btnsDisabled, setBtnsDisabled] = useState({
        salad: false,
        bacon: false,
        cheese: false,
        meat: false,
    })

    const [ingredients, setIngredients] = useState(null)
    const [price, setPrice] = useState(0)
    const [purchasable, setPurchasable] = useState(false)
    const [purchasing, setPurchasing] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!ingredients) return

        recalculatePrice() // temporary solution as we use 'initialState'
        
        setBtnsDisabled({
            salad: !ingredients.salad,
            bacon: !ingredients.bacon,
            cheese: !ingredients.cheese,
            meat: !ingredients.meat,
        })

        setPurchasable(ingredients.salad || ingredients.bacon || ingredients.cheese || ingredients.meat)
    }, [
        ingredients
    ])

    useEffect(() => {
        if (!props.location.state) {
            axios.get('/ingredients.json')
            .then(resp => setIngredients(resp.data))
            .catch(err => {})
        } else {
            setIngredients(props.location.state)
        }
    }, [])

    const recalculatePrice = () => {
        setPrice(
            recalculateSingleIngredientPrice("salad") +
                recalculateSingleIngredientPrice("bacon") +
                recalculateSingleIngredientPrice("cheese") +
                recalculateSingleIngredientPrice("meat")
        )
    }

    const recalculateSingleIngredientPrice = (type) => ingredients[type] * INGREDIENT_PRICES[type]

    const removeIngredientHandler = (type) => {
        setIngredients((prevState) => {
            let oldValue = prevState[type]
            let newValue = oldValue > 0 ? oldValue - 1 : oldValue
            const newState = { ...prevState }
            newState[type] = newValue
            return newState
        })
    }

    const addIngredientHandler = (type) => {
        setIngredients((prevState) => {
            const newState = { ...prevState }
            newState[type] = prevState[type] + 1
            return newState
        })
    }

    const purchaseHandler = () => setPurchasing(true)

    const purchaseCancelHandler = () => {setPurchasing(false)}

    const purchaseContinueHandler = () => {
        props.history.push('/checkout', {ingredients, price})
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
                            ingredientAdded={addIngredientHandler}
                            ingredientRemoved={removeIngredientHandler}
                            btnsDisabled={btnsDisabled}
                            price={price}
                            purchasable={purchasable}
                            purchase={purchaseHandler}
                        />
                    </>
                    : <Spinner />
            }
        </>
    )
}

export default withErrorHandler(BurgerBuilder, axios)
