import React from 'react'
import Link from 'next/link'

const errorPage = (props) => {

    return (
        <>
            <div>Custom error page</div>
            <Link href='/'><a>go home</a></Link>
        </>
    )
}

export default errorPage