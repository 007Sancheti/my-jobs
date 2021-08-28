import React from 'react'
import './with-background.styles.scss'

const WithBackground = (WrappedComponent) => ({classic}) => {
    return (
        <div>
            <div className={`${classic ? 'classic' : ''} background1`}></div>
            <WrappedComponent />
        </div>
    )
}

export default WithBackground
