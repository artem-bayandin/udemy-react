import React, { Component } from 'react'

import Menu from '../../containers/Menu/Menu'

class AuthIndexPage extends Component {
    static getInitialProps(context) {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    appName: 'My App'
                })
            }, 1000)
        })
        return promise // not a good experience, as it block the page from loading; need more investigation
    }

    render() {
        return (
            <>
                <Menu />
                <h1>Auth Index page, app name: {this.props.appName}</h1>
            </>
        )
    }
}

export default AuthIndexPage