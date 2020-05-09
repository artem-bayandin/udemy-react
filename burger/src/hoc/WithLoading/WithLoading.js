import React, { Suspense } from "react"
import Spinner from "../../components/UI/Spinner/Spinner"

const WithLoading = props => {
    return (
        <Suspense fallback={<Spinner />}>
            {props.children}
        </Suspense>
    )
}

export default WithLoading