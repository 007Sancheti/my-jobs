import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({
    children,
    padding,
    fontSize,
    classic,
    inverted,
    invertedBlue,
    ...otherProps
}) => {
    return (
        <button
            style={{ padding, fontSize }}
            className={`${invertedBlue ? 'inverted-blue' : ''} ${
                inverted ? 'inverted' : ''
            } ${classic ? 'classic' : ''} custom-button`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default CustomButton;
