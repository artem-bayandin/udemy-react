import React, { useState, useEffect } from "react"
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"

import axios from '../../axios-orders-firebase'
import Spinner from "../../components/UI/Spinner/Spinner"

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3,
}

const BurgerBuilder = (props) => {
    const initialIngredients = {
        salad: 1,
        bacon: 1,
        cheese: 2,
        meat: 2,
    }

    const [btnsDisabled, setBtnsDisabled] = useState({
        salad: false,
        bacon: false,
        cheese: false,
        meat: false,
    })

    const [ingredients, setIngredients] = useState(initialIngredients)
    const [price, setPrice] = useState(0)
    const [purchasable, setPurchasable] = useState(false)
    const [purchasing, setPurchasing] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        recalculatePrice() // temporary solution as we use 'initialState'
        
        setBtnsDisabled({
            salad: !ingredients.salad,
            bacon: !ingredients.bacon,
            cheese: !ingredients.cheese,
            meat: !ingredients.meat,
        })

        setPurchasable(ingredients.salad || ingredients.bacon || ingredients.cheese || ingredients.meat)
    }, [
        ingredients.salad,
        ingredients.bacon,
        ingredients.cheese,
        ingredients.meat,
    ])

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
        const order = {
            ingredients,
            price: price.toFixed(2),
            customer: 'John Doe',
            address: {
                contry: 'UK',
                city: 'London'
            },
            email: 'mail@gmail.com'
        }
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
                setPurchasing(false)
            })
    }

    return (
        <>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                {
                    loading
                        ? <Spinner />
                        : <OrderSummary
                            ingredients={ingredients}
                            cancelPurchase={purchaseCancelHandler}
                            continuePurchase={purchaseContinueHandler}
                            price={price}
                          />
                }
            </Modal>
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
    )
}

export default BurgerBuilder
