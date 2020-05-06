import React, { useEffect, useState } from 'react'

import styles from './Input.module.css'

const Input = (props) => {
    const [inputElement, setInputElement] = useState(null)

    useEffect(() => {
        const inputClasses = [styles.InputElement]
        
        if (props.touched === true && props.isValid === false) {
            inputClasses.push(styles.Invalid)
        }

        switch (props.inputtype) {
            case 'input':
                setInputElement(<input 
                    name={props.name}
                    className={inputClasses.join(' ')} 
                    {...props.elementConfig} 
                    value={props.value} 
                    onChange={props.changed}/>)
                break;
            case 'textarea':
                setInputElement(<textarea 
                    name={props.name}
                    className={inputClasses.join(' ')} 
                    {...props.elementConfig} 
                    value={props.value} 
                    onChange={props.changed}/>)
                break;
            case 'select':
                setInputElement(<select 
                    name={props.name}
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                        {
                            props.elementConfig.options.map(opt => {
                                return (<option key={opt.value} value={opt.value}>{opt.displayName}</option>)
                            })
                        }
                    </select>)
                break;
            default:
                setInputElement(<input 
                    name={props.name}
                    className={inputClasses.join(' ')} 
                    {...props.elementConfig} 
                    value={props.value} 
                    onChange={props.changed}/>)
                break;
        }
    }, [props.value, props.isValid])

    return (
        <div className={styles.Input}>
            <label className={styles.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input