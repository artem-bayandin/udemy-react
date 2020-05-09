import React, { useState } from 'react'

import styles from './Auth.module.css'
import Input from '../../components/UI/Inputs/Input'
import Button from '../../components/UI/Button/Button'

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

    const inputChanged = (ev) => {
        const target = ev.target
        
        const newState = {...formData}
        newState[target.name].value = target.value

        setFormData(newState)
    }

    const submitForm = (ev) => {
        ev.preventDefault()
        console.log('[Auth] login clicked')
    }

    return (
        <div className={styles.Auth}>
            {/* {props.purchased && <Redirect to='/' />} */}
            {
                // props.loading ? <Spinner />
                //         : (
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
                    </form>
                // )
            }
        </div>
    )
}

export default Auth