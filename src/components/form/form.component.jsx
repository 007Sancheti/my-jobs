import React from 'react'
import './form.styles.scss'

const Form = ({title, children}) => {
    return (
        <div className="form">
            <h2 className="form-title">{title}</h2>
            {children}
        </div>
    )
}

export default Form
