import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, id, placeholder, ...otherProps }) => {
    return (
            <input className='form-input' id={id} placeholder = {placeholder} onChange={handleChange} {...otherProps} />
    );
};

export default FormInput;
