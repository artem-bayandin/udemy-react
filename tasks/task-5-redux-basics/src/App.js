import React from 'react'
import styles from './App.module.css'

import { connect } from 'react-redux'
import { ADD_USER, DEL_USER } from './store/store'

const App = props => {
    const del = (ev, id) => {
        ev.preventDefault()
        props.delUser(id)
    }
    return (
        <div className={styles.App}>
            <div className={styles.Btn} onClick={props.addUser}>add</div>
            {
                props.appUsers.map(user =>
                    (<div
                        key={user.id}
                        className={styles.Person}
                        onClick={(ev) => del(ev, user.id)}
                    ><strong>{user.id}</strong> <span>{user.name}</span></div>))
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        appUsers: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: () => dispatch({type: ADD_USER}),
        delUser: (id) => dispatch({type: DEL_USER, payload: {id}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
