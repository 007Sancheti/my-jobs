import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import './view-applicants.styles.scss'

const ViewApplicants = ({setOpen, applicants}) => {
    return (
        <div className="view-applicants-container">
            <div className='header'>
                <h3 className="applicants-heading">Applicants for this job</h3>
                <CloseIcon className="close-icon" onClick={() => setOpen(false)} />
            </div>
            <p className='subheader'>Total 35 applications </p>
            {applicants ? <div> I'm applicant </div> : <div className="no-applications-image-container">
                <div className="no-applications-image" />
                <p className="no-application-text">No applications available!</p>
            </div>}
        </div>
    );
};

export default ViewApplicants;
