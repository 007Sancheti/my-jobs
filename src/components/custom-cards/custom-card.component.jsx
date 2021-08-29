import React, { useState } from 'react';
import TransitionsModal from '../transitions-modal/transitions-modal.component';
import ViewApplicants from '../view-applicants/view-applicants.component';
import CustomButton from '../custom-button/custom-button.component';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { getAllApplicants } from '../../api';

import './custom-card.styles.scss';

const CustomCard = ({
    item: { title, description, location, id },
    width,
    titleColor,
}) => {
    const [open, setOpen] = useState(false);
    const [applicants, setApplicants] = useState([]);
    console.log(applicants);
    const handleOpen = () => {
        let currentUser = JSON.parse(sessionStorage.getItem('user'));
        let headers = {
            Authorization: currentUser.token,
        };
        getAllApplicants(id, headers).then((res) => {
            if (res.message) {
                return;
            } else {
                setApplicants(res.data);
            }
        });
        setOpen(true);
    };
    return (
        <div style={{ width }} className='card'>
            <h3 className='card-heading' style={{ color: titleColor }}>
                {title}
            </h3>
            <p>{description}</p>
            {location && (
                <div className='view-applications-container'>
                    <div className='location-container'>
                        <LocationOnIcon
                            className='location-icon'
                            fontSize='small'
                        />
                        <span>{location}</span>
                    </div>
                    <CustomButton
                        onClick={handleOpen}
                        fontSize='12px'
                        padding='9px 15px'
                        invertedBlue
                    >
                        View Applications
                    </CustomButton>
                    <TransitionsModal open={open} setOpen={setOpen}>
                        <ViewApplicants applicants={applicants} setOpen={setOpen} />
                    </TransitionsModal>
                </div>
            )}
        </div>
    );
};

export default CustomCard;
