import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'

import styles from './Auth.module.css'
import Input from '../../components/UI/Inputs/Input'
import Button from '../../components/UI/Button/Button'

import { signup, signin } from '../../store/actions'
import Spinner from '../../components/UI/Spinner/Spinner'
import { Redirect, withRouter } from 'react-router'

// this auth won't include field validation!
const Auth = props => {
    const [ formData, setFormData ] = useState({
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your email'
            },
            value: 'j.doe@gmail.com'
            // isValid: false,
            // validationRules: {
            //     required: true,
            //     minLength: 8
            // },
            // touched: false
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Your password'
            },
            value: '12345678'
            // isValid: false,
            // validationRules: {
            //     required: true,
            //     minLength: 8
            // },
            // touched: false
        },
    })
    const [ isSignup, setIsSignup ] = useState(false)
    const [ returnUrl, setReturnUrl ] = useState('/')

    const inputChanged = (ev) => {
        const target = ev.target
        
        const newState = {...formData}
        newState[target.name].value = target.value

        setFormData(newState)
    }

    const submitForm = (ev) => {
        ev.preventDefault()
        if (isSignup) {
            props.signup(formData.email.value, formData.password.value)
        } else {
            props.signin(formData.email.value, formData.password.value)
        }
    }

    const toggleSignup = (ev) => {
        ev.preventDefault()
        setIsSignup(prevState => !prevState)
    }

    useEffect(() => {
        if (props.history.location.state && props.history.location.state.returnUrl) {
            setReturnUrl(props.history.location.state.returnUrl)
        }
    }, [props.history.location.state])

    return (
        <>
            {!props.isAuthenticated && (
            <div className={styles.Auth}>
                <h4>{isSignup ? 'SIGN UP' : 'SIGN IN'}</h4>
                {props.error && (<div>{props.error.message}</div>)}
                {
                    props.loading ? <Spinner />
                            : (
                        <form onSubmit={submitForm}>
                            {
                                Object.keys(formData).map(key => {
                                    return (
                                        <Input
                                            key={key}
                                            name={key}
                                            inputtype={formData[key].elementType}
                                            elementConfig={formData[key].elementConfig}
                                            value={formData[key].value}
                                            isValid={formData[key].isValid}
                                            touched={formData[key].touched}
                                            changed={inputChanged}
                                        />
                                    )
                                })
                            }
                            <Button btnType="Success" clicked={submitForm}>submit</Button>
                            <Button btnType="Danger" clicked={toggleSignup}>switch to {isSignup ? 'signIn' : 'signUp'}</Button>
                        </form>
                    )
                }
            </div>
            )}
            {props.isAuthenticated && <Redirect to={returnUrl} />}
        </>
    )
}

const mapState = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: !!state.auth.token
    }
}

const mapDispatch = dispatch => {
    return {
        signup: (email, pass) => dispatch(signup(email, pass)),
        signin: (email, pass) => dispatch(signin(email, pass))
    }
}

export default connect(mapState, mapDispatch)(withRouter(Auth))