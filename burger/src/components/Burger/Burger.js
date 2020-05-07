import React from 'react'

import styles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = props => {
    const formattedBurger = {
        salad: props.ingredients.salad,
        bacon: props.ingredients.bacon,
        cheese: props.ingredients.cheese,
        meat: props.ingredients.meat
    }
    let strangeTransformation = Object.keys(formattedBurger || {})
        .map(key => {
            return [...Array(formattedBurger[key])]
                .map((_, index) => {
                    return <BurgerIngredient key={key + index} type={key} />
                })
        })
        .reduce((accumulated, current) => {
            return accumulated.concat(current)
        }, [])
    if (!strangeTransformation.length) {
        strangeTransformation = <p>Please add some ingredients</p>
    }
    return (
        <div className={styles.burger}>
            <BurgerIngredient type='bread-top' />
            {strangeTransformation}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default Burger