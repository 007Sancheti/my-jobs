import React from 'react';
import { Field, ErrorMessage } from 'formik';

import './form-input.styles.scss';

const FormInput = ({
    id,
    errormessage,
    touched,
    ...otherProps
}) => {
    return (
        <div className="input-container">
            <Field
                className='form-input'
                id={id}
                {...otherProps}
            />
            <div className='error-message'>
                <ErrorMessage name={id} />
            </div>
        </div>
    );
};

export default FormInput;
