import { createStore } from 'redux'

export const ADD_USER = 'ADD_USER'
export const DEL_USER = 'DEL_USER'

const reducer = (state = {users: []}, action) => {
    switch (action.type) {
        case ADD_USER:
            const newUser = {
                id: Math.round(Math.random() * 1000),
                name: 'John-' + Math.round(Math.random() * 1000)
            }
            return {
                ...state,
                users: [...state.users, newUser]
            }
        case DEL_USER:
            return {
                ...state,
                users: [...state.users].filter(user => user.id !== action.payload.id)
            }
    }
    return state
}

const store = createStore(reducer)

export default store