import React from 'react';
import CustomCard from './custom-card.component';
import './custom-cards.styles.scss';

const CustomCards = ({items}) => {
    return (
        <div className='cards'>
            {items
                .map((item) => (
                    <CustomCard key={item.id} item={item} />
                ))}
        </div>
    );
};

export default CustomCards;
