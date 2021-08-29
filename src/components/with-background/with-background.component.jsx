import React from 'react'
import './with-background.styles.scss'

const WithBackground = (WrappedComponent) => ({classic, ...otherProps}) => {
    return (
        <div>
            <div className={`${classic ? 'classic' : ''} background1`}></div>
            <WrappedComponent {...otherProps}/>
        </div>
    )
}

export default WithBackground
