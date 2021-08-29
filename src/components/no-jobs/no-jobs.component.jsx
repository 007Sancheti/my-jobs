import React from 'react';
import { withRouter } from 'react-router';
import DescriptionIcon from '@material-ui/icons/Description';
import CustomButton from '../custom-button/custom-button.component';
import './no-jobs.styles.scss';

const NoJobs = ({ history }) => {
    return (
        <div className='no-jobs-container'>
            <DescriptionIcon fontSize='large' />
            <h3>Your posted jobs will show here!</h3>
            <CustomButton
                onClick={() => {
                    history.push('/post-job');
                }}
            >
                Post a job
            </CustomButton>
        </div>
    );
};

export default withRouter(NoJobs);
