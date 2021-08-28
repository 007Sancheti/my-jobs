import React from 'react';
import './companies-viewer.styles.scss';

const CompaniesViewer = () => {
    const importAll = (r) => {
        let images = {};
        r.keys().forEach((item) => {
            images[item.replace('./', '')] = r(item);
        });
        return images;
    };

    const images = importAll(
        require.context(
            '../../assets/companies-logo',
            false,
            /\.(png|jpe?g|svg)$/
        )
    );
    return (
        <div className='collection'>
            {Object.keys(images).map((image, index) => (
                <img
                    alt={`company-${index + 1}`}
                    key={index}
                    className='image'
                    src={images[`${index + 1}.png`].default}
                ></img>
            ))}
        </div>
    );
};

export default CompaniesViewer;
