import React from 'react';
import CustomForm from '../custom-form/custom-form.component';
import CustomLabel from '../custom-label/custom-label.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import FormTextarea from '../form-textarea/form-textarea.component';
import { Formik } from 'formik';
import { postJob } from '../../api';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './post-job.styles.scss';

const initialValues = {
    title: '',
    description: '',
    location: '',
};

let validationSchema = Yup.object({
    title: Yup.string().required('Required!'),
    description: Yup.string().required('Required!'),
    location: Yup.string().required('Required!'),
});

const PostJob = ({ history }) => {
    const onSubmit = (values, onSubmitProps) => {
        console.log('formdata', values);
        let currentUser = JSON.parse(sessionStorage.getItem('user'));
        let headers = {
            Authorization: currentUser.token,
        };
        postJob(values, headers).then((res) => {
            onSubmitProps.resetForm();
            toast('Posted Successfully!!');
        });
    };
    return (
        <div>
            <ToastContainer />
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <CustomForm title='Post a Job'>
                    <CustomLabel id='title'>Job title*</CustomLabel>
                    <FormInput
                        id='title'
                        name='title'
                        type='text'
                        placeholder='Enter job title'
                    />
                    <CustomLabel id='description'>Description*</CustomLabel>
                    <FormTextarea
                        id='description'
                        name='description'
                        placeholder='Enter job description'
                    ></FormTextarea>
                    <CustomLabel id='location'>Location*</CustomLabel>
                    <FormInput
                        id='location'
                        name='location'
                        type='text'
                        placeholder='Enter location'
                    />
                    <div className='post-button-container'>
                        <CustomButton type='submit'>Post</CustomButton>
                    </div>
                </CustomForm>
            </Formik>
        </div>
    );
};

export default PostJob;
