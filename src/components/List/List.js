import React from 'react'
import './List.css'

export function PageList({greeting}) {
    return (
        <div className='landingPage'>
            <h2> {greeting} </h2>
        </div>
    )
}