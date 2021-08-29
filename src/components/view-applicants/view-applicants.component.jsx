import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import ApplicantCard from '../applicant-card/applicant-card.component';

import './view-applicants.styles.scss';

const ViewApplicants = ({ setOpen, applicants }) => {
    return (
        <div className='view-applicants-container'>
            <div className='header'>
                <h3 className='applicants-heading'>Applicants for this job</h3>
                <CloseIcon
                    className='close-icon'
                    onClick={() => setOpen(false)}
                />
            </div>
            <p className='subheader'>Total {applicants.length} applications </p>
            {applicants.length ? (
                <div className='applicant-cards'>
                    {applicants.map((applicant) => (
                        <ApplicantCard applicant={applicant} />
                    ))}
                </div>
            ) : (
                <div className='no-applications-image-container'>
                    <div className='no-applications-image' />
                    <p className='no-application-text'>
                        No applications available!
                    </p>
                </div>
            )}
        </div>
    );
};

export default ViewApplicants;
