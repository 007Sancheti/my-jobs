import React from 'react';
import { Field, ErrorMessage } from 'formik';

import './form-textarea.styles.scss';

const FormTextarea = ({ id, ...otherProps }) => {
    return (
        <div className='textarea-container'>
            <Field
                as='textarea'
                className='form-textarea'
                id={id}
                name={id}
                {...otherProps}
            />
            <div className='error-message'>
                <ErrorMessage name={id} />
            </div>
        </div>
    );
};

export default FormTextarea;
