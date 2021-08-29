import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WithToast =
    (WrappedComponent) =>
    ({ ...ownProps }) => {
        const handleToast = (message) => {
            toast(message);
        };
        return (
            <div>
                <ToastContainer />
                <WrappedComponent toast={handleToast} {...ownProps} />
            </div>
        );
    };

export default WithToast;
