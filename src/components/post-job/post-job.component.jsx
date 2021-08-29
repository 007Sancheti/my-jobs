import React from 'react';
import CustomForm from '../custom-form/custom-form.component';
import CustomLabel from '../custom-label/custom-label.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import FormTextarea from '../form-textarea/form-textarea.component';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './post-job.styles.scss';

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    skills: '',
};

let validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid email format').required('Required!'),
    password: Yup.string().min(6).required('Required!'),
    confirmPassword: Yup.string().min(6).required('Required!'),
});

const onSubmit = (values) => {
    console.log('formdata', values);
};

const PostJob = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <CustomForm title='Post a Job'>
                <CustomLabel id='jobTitle'>Job title*</CustomLabel>
                <FormInput
                    id='jobTitle'
                    name='jobTitle'
                    type='text'
                    placeholder='Enter job title'
                />
                <CustomLabel id='jobDescription'>Description*</CustomLabel>
                <FormTextarea placeholder='Enter job description'></FormTextarea>
                <CustomLabel id='location'>Location*</CustomLabel>
                <FormInput
                    id='location'
                    name='location'
                    type='text'
                    placeholder='Enter location'
                />
                <div className='post-button-container'>
                    <CustomButton>Post</CustomButton>
                </div>
            </CustomForm>
        </Formik>
    );
};

export default PostJob;
