import React from 'react';
import './custom-button.styles.scss';

const CustomLabel = ({ id, children }) => {
    return (
        <label className='input-label' htmlFor={id}>
            {children}
        </label>
    );
};

export default CustomLabel;
