import React from 'react';
import CustomForm from '../custom-form/custom-form.component';
import CustomLabel from '../custom-label/custom-label.component';
import FormInput from '../form-input/form-input.component';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomButton from '../custom-button/custom-button.component';
import ResetPassword from '../reset-password/reset-password.component';
import { forgotPassword } from '../../api';
import './forgot-password.styles.scss';

const initialValues = {
    email: '',
};

let validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required!'),
});

const ForgotPassword = () => {
    let [showResetPage, setShowResetPage] = React.useState(false);
    let [resetToken, setResetToken] = React.useState('');
    const onSubmit = (values) => {
        forgotPassword(values.email).then((res) => {
            setResetToken(res.data.token);
            setShowResetPage(true);
        });
    };

    if (showResetPage) {
        return <ResetPassword resetToken={resetToken} />;
    } else {
        return (
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <CustomForm title='Forgot your password?'>
                    <p className='instructions'>
                        Enter the email associated with your account and we’ll
                        send you instructions to reset your password.
                    </p>
                    <CustomLabel id='email'>Email address</CustomLabel>
                    <FormInput
                        id='email'
                        type='text'
                        name='email'
                        placeholder='Enter your email'
                    />
                    <div className='submit-button-container'>
                        <CustomButton type='submit'>Submit</CustomButton>
                    </div>
                </CustomForm>
            </Formik>
        );
    }
};

export default ForgotPassword;
