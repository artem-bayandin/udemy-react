import React, { useState, useEffect } from "react"
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"

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

    return (
        <>
            <Burger ingredients={ingredients} />
            <BuildControls
                ingredientAdded={addIngredientHandler}
                ingredientRemoved={removeIngredientHandler}
                btnsDisabled={btnsDisabled}
                price={price}
                purchasable={purchasable}
            />
        </>
    )
}

export default BurgerBuilder
