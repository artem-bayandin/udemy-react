import React, { useState } from 'react'

export const ProductsContext = React.createContext({
    products: [],
    toggleFav: () => {}
})

export default props => {
    const [productList, setProductList] = useState([
        {
          id: 'p1',
          title: 'Red Scarf',
          description: 'A pretty red scarf.',
          isFavorite: false
        },
        {
          id: 'p2',
          title: 'Blue T-Shirt',
          description: 'A pretty blue t-shirt.',
          isFavorite: false
        },
        {
          id: 'p3',
          title: 'Green Trousers',
          description: 'A pair of lightly green trousers.',
          isFavorite: false
        },
        {
          id: 'p4',
          title: 'Orange Hat',
          description: 'Street style! An orange hat.',
          isFavorite: false
        }
    ])

    const toggleFavourite = productId => {
        setProductList(prevProdList => {
            return prevProdList.map(item => {
                return {
                    ...item,
                    isFavorite: item.id === productId ? !item.isFavorite : item.isFavorite
                }
            })
        })
    }

    return (
        <ProductsContext.Provider value={{products: productList, toggleFav: toggleFavourite}}>
            {props.children}
        </ProductsContext.Provider>
    )
}