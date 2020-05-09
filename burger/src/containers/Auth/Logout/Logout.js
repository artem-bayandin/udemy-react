import React, { useEffect } from 'react'


import { connect } from 'react-redux'
import { logout } from '../../../store/actions'
import { Redirect } from 'react-router'

const Logout = props => {
    useEffect(() => {
        props.logout()
    }, [])

    return (
        <Redirect to='/' />
    )
}

const mapDispatch = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatch)(Logout)