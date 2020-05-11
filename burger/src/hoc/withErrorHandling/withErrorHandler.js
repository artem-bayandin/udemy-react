import React, { useState, useEffect } from "react";

import Modal from "../../components/UI/Modal/Modal";

import useHttpErrorHandler from '../../hooks/http-error-handler'

// does not work if error happened in initial useEffect
// BurgerBuilder axios.get('/ingredients')

const withErrorHandler = (WrappedComponent, axios) => (props) => {
    const [ error, errorHandled, handleModalClosed ] = useHttpErrorHandler(axios)

    return (
        <>
            {error && <Modal show modalClosed={handleModalClosed}>{error.message}</Modal>}
            {!error && !errorHandled && <WrappedComponent {...props} />}
        </>
    );
};

export default withErrorHandler;
