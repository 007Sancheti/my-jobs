import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.actions';
import CustomForm from '../custom-form/custom-form.component';
import CustomLabel from '../custom-label/custom-label.component';
import FormInput from '../form-input/form-input.component';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './reset-password.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { resetPassword, changePassword } from '../../api/index';
import WithToast from '../../higher-order-components/with-toast-hoc/with-toast.component';

const initialValues = {
    password: '',
    confirmPassword: '',
};

let validationSchema = Yup.object({
    password: Yup.string().min(6).required('Required!'),
    confirmPassword: Yup.string().min(6).required('Required!'),
});

const ResetPassword = ({ resetToken, toast, setCurrentUser }) => {
    const onSubmit = (values, onSubmitProps) => {
        values.token = resetToken;
        console.log('Form data', values);
        changePassword(values)
            .then((res) => setCurrentUser(res.data))
            .catch((error) => {
                onSubmitProps.resetForm();
                toast(error.data.message);
            });
    };
    React.useEffect(() => {
        if (resetToken) {
            resetPassword(resetToken).then((res) => console.log(res));
        }
    }, [resetToken]);
    return (
        <div className='reset-form'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <CustomForm title='Reset Your Password'>
                    <p className='instructions'>
                        Enter your new password below.
                    </p>
                    <CustomLabel id='password'>New password</CustomLabel>
                    <FormInput
                        id='password'
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                    />
                    <CustomLabel id='password'>
                        Confirm new password
                    </CustomLabel>
                    <FormInput
                        id='confirmPassword'
                        type='password'
                        name='confirmPassword'
                        placeholder='Enter your password'
                    />
                    <div className='submit-button-container'>
                        <CustomButton type='submit'>Submit</CustomButton>
                    </div>
                </CustomForm>
            </Formik>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (currentUser) => dispatch(setCurrentUser(currentUser)),
});

export default connect(null, mapDispatchToProps)(WithToast(ResetPassword));
