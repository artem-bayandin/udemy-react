import React from 'react'

import Menu from '../containers/Menu/Menu'

const indexPage = (props) => {

    return (
        <>
            <Menu />
            <h1>Index page</h1>
            {props.appName && <p>App name: {props.appName}</p>}
        </>
    )
}

indexPage.getInitialProps = async (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                appName: 'My App'
            })
        }, 250)
    })
    return promise // not a good experience, as it block the page from loading; need more investigation
}

export default indexPage