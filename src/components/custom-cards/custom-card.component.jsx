import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './custom-card.styles.scss';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const CustomCard = ({
    item: { title, content, width, titleColor, location },
}) => {
    return (
        <div style={{ width }} className='card'>
            <h3 className="card-heading" style={{ color: titleColor }}>{title}</h3>
            <p>{content}</p>
            {location && <div className='view-applications-container'>
                    <div className="location-container">
                        <LocationOnIcon className="location-icon" fontSize="small" />
                        <span>{location}</span>
                    </div>
                    <CustomButton onClick={()=>alert('I\'m clicked')} fontSize="12px" padding="9px 15px" inverted>View Applications</CustomButton>
                </div>}
        </div>
    );
};

export default CustomCard;
