import React, { useState, useEffect } from "react";

import Modal from "../../components/UI/Modal/Modal";

// does not work if error happened in initial useEffect
// BurgerBuilder axios.get('/ingredients')

const withErrorHandler = (WrappedComponent, axios) => (props) => {
    const [error, setError] = useState(null);
    const [errorHandled, setErrorHandled] = useState(false)
    const interceptors = {
        req: null,
        res: null,
    }
    useEffect(() => {
        interceptors.req = axios.interceptors.request.use(
            (req) => {
                console.log('[withErrorHandler req]')
                setError(null);
                return req;
            },
            (err) => {
                console.log('[withErrorHandler err]', err)
                setError(err)
            }
        );
        interceptors.res = axios.interceptors.response.use(
            (res) => {
                console.log('[withErrorHandler resp]')
                setError(null);
                return res;
            },
            (err) => {
                console.log('[withErrorHandler err]', err)
                setError(err)
            }
        );

        return () => {
            // cleanup
            axios.interceptors.request.eject(interceptors.req)
            axios.interceptors.response.eject(interceptors.res)
            interceptors.req = null
            interceptors.res = null
        };
    }, []);

    const handleModalClosed = ev => {
        setErrorHandled(true)
        setTimeout(() => {
            setError(null)
        }, 100);
    }

    return (
        <>
            {error && <Modal show modalClosed={handleModalClosed}>{error.message}</Modal>}
            {!error && !errorHandled && <WrappedComponent {...props} />}
        </>
    );
};

export default withErrorHandler;
