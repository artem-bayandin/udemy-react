import React from 'react'

import Menu from '../../containers/Menu/Menu'
import User from '../../components/User/User'

const authUserPage = (props) => {

    return (
        <>
            <Menu />
            <h1>Auth User page</h1>
            <User name="Max" age="28" />
        </>
    )
}

export default authUserPage