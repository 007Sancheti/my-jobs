import React from 'react';
import CustomCard from './custom-card.component';
import './custom-cards.styles.scss';

const CustomCards = ({items, ...otherProps}) => {
    return (
        <div className='cards'>
            {items
                .map((item) => (
                    <CustomCard key={item.id} item={item} {...otherProps}/>
                ))}
        </div>
    );
};

export default CustomCards;
