import React, { useState } from 'react';
import TransitionsModal from '../transitions-modal/transitions-modal.component';
import ViewApplicants from '../view-applicants/view-applicants.component';
import CustomButton from '../custom-button/custom-button.component';
import './custom-card.styles.scss';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const CustomCard = ({
    item: { title, description, location },
    width,
    titleColor,
}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
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
                        <ViewApplicants setOpen={setOpen} />
                    </TransitionsModal>
                </div>
            )}
        </div>
    );
};

export default CustomCard;
