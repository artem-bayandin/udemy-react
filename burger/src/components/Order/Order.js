import React, { useState, useEffect } from 'react'

import styles from './Order.module.css'
import Burger from '../Burger/Burger'

const Order = (props) => {
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        const arr = [];
        for (let key in props.ingredients) {
            arr.push({
                name: key,
                amount: props.ingredients[key]
            })
        }
        setIngredients(arr)
    }, [])

    return (
        

        <div className={styles.Order}>
            <p>Ingredients: {ingredients.map(item => 
                <span key={item.name} style={{textTransform: 'capitalize', display: 'inline-block', margin: '0 5px', padding: '5px 10px', border: '1px solid #ccc'}}>
                    {item.name} ({item.amount})
                </span>
            )}</p>
            <p>Price: <strong>USD {(+props.price).toFixed(2)}</strong></p>
            <div style={{width: '100px', height: '100px'}}>
                <Burger ingredients={props.ingredients} />
            </div>
        </div>
    )
}

export default Order