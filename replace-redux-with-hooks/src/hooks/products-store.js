import { initStore } from './store'

export const configureStore = () => {
    const actions = {
        TOGGLE_FAV: (currentState, productId) => {
            console.log('TOGGLE_FAV currentState', currentState)
            return {
                products: currentState.products.map(item => {
                    return {
                        ...item,
                        isFavorite: item.id === productId ? !item.isFavorite : item.isFavorite
                    }
                })
            }
        }
    }

    initStore(actions, {products: [
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
    ]})
}