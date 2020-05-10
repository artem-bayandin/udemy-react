import React from 'react'
import Link from 'next/link'

const page404 = (props) => {

    return (
        <>
            <div>Custom 404 page</div>
            <Link href='/'><a>go home</a></Link>
        </>
    )
}

export default page404