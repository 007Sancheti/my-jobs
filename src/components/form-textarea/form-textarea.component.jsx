import React from 'react';

import './form-textarea.styles.scss';

const FormTextarea = ({ handleChange, id, placeholder, children, ...otherProps }) => {
    return (
            <textarea className='form-input' id={id} rows="4" cols="50" placeholder = {placeholder} onChange={handleChange} {...otherProps}>
                {children}
            </textarea>
    );
};

export default FormTextarea;
