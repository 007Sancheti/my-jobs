import React from 'react';
import Form from '../form/form.component'
import CustomLabel from '../custom-label/custom-label.component'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import FormTextarea from '../form-textarea/form-textarea.component';
import './post-job.styles.scss'

const PostJob = () => {
    return (
        <div>
            <Form title='Post a Job'>
                <CustomLabel id='jobTitle'>Job title*</CustomLabel>
                <FormInput
                    id='jobTitle'
                    type='text'
                    placeholder='Enter job title'
                />
                <CustomLabel id='jobDescription'>Description*</CustomLabel>
                <FormTextarea placeholder="Enter job description"></FormTextarea>
                <CustomLabel id='location'>Location*</CustomLabel>
                <FormInput
                    id='location'
                    type='text'
                    placeholder='Enter location'
                />
                <div className="post-button-container">
                    <CustomButton>Post</CustomButton>
                </div>
            </Form>
        </div>
    );
};

export default PostJob;
