import React from 'react';
import Avatar from 'react-avatar';
import './applicant-card.styles.scss';

const ApplicantCard = ({ applicant }) => {
    return (
        <div className='applicant-card'>
            <div className='flex-row'>
                <Avatar
                    className='avatar'
                    size='45px'
                    color='#81b5db'
                    fgColor='#303F60'
                    name={applicant.name}
                    textSizeRatio={2}
                    round
                />
                <div className='flex-column'>
                    <h3 className='applicant-name'>{applicant.name}</h3>
                    <p className='applicant-email'>{applicant.email}</p>
                </div>
            </div>
            <div className='skills'>
                <h5>Skills</h5>
                <p>{applicant.skills}</p>
            </div>
        </div>
    );
};

export default ApplicantCard;
