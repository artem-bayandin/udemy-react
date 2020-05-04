import React, { useState, useEffect } from "react";

import Modal from "../../components/UI/Modal/Modal";

// does not work if error happened in initial useEffect
// BurgerBuilder axios.get('/ingredients')

const withErrorHandler = (WrappedComponent, axios) => (props) => {
    const [error, setError] = useState(null);
    const interceptors = {
        req: null,
        res: null,
    }
    useEffect(() => {
        interceptors.req = axios.interceptors.request.use((req) => {
            setError(null);
            return req;
        });
        interceptors.res = axios.interceptors.response.use(
            (res) => res,
            (err) => setError(err)
        );

        return () => {
            // cleanup
            axios.interceptors.request.eject(interceptors.req)
            axios.interceptors.response.eject(interceptors.res)
            interceptors.req = null
            interceptors.res = null
        };
    }, []);

    return (
        <>
            {error ? (
                <Modal show modalClosed={() => setError(null)}>
                    {error.message}
                </Modal>
            ) : (
                <WrappedComponent {...props} />
            )}
        </>
    );
};

export default withErrorHandler;
