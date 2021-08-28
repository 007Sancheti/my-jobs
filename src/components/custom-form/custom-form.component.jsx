import React from 'react';
import { Form } from 'formik';
import './custom-form.styles.scss';

const CustomForm = ({ title, children }) => {
    return (
        <Form className='form'>
            <h2 className='form-title'>{title}</h2>
            {children}
        </Form>
    );
};

export default CustomForm;
