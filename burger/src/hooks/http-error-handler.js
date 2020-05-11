import { useState, useEffect } from 'react'

export default axios => {
    const [error, setError] = useState(null);
    const [errorHandled, setErrorHandled] = useState(false)
    const interceptors = {
        req: null,
        res: null,
    }
    useEffect(() => {
        interceptors.req = axios.interceptors.request.use(
            (req) => {
                setError(null);
                return req;
            },
            (err) => {
                setError(err)
            }
        );
        interceptors.res = axios.interceptors.response.use(
            (res) => {
                setError(null);
                return res;
            },
            (err) => {
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

    return [
        error,
        errorHandled,
        handleModalClosed
    ]
}