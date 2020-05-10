import React from 'react'
import styles from './User.module.css'

const User = props => {

    return (
        <div className={styles.User}>
            <p>Name: <strong>{props.name}</strong></p>
            <p className="inline-styled-age-p">Age: <strong>{props.age}</strong></p>

            <style jsx>{`
                p.inline-styled-age-p {
                    color: red;
                }
            `}</style>
        </div>
    )
}

export default User