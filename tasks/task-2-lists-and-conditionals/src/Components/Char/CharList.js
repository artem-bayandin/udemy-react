import React from 'react'
import Char from './Char'
import './CharList.css'

const CharList = (props) => {

    const deleteByIndex = index => props.deleteByIndex(index)

    if (!props.text) return null

    return (
        <div className='card char-list'>
            <h2>Char List</h2>
            {
                props.text.split('').map((item, index) => <Char key={index} item={item} click={() => deleteByIndex(index)} />)
            }
        </div>
    )
}

export default CharList