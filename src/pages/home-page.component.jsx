import React from 'react';
import CustomButton from '../components/custom-button/custom-button.component';
import CustomCards from '../components/custom-cards/custom-cards.component';
import CompaniesViewer from '../components/companies-viewer/companies-viewer.component';
import './home-page.styles.scss';

const HomePage = () => {
    const items = [
        {
            id: 1,
            title: 'Get more visibility',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        },
        {
            id: 2,
            title: 'Organize your candidates',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 3,
            title: 'Verify their abilities',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
        },
    ];
    return (
        <div className='home-page'>
            <div className='welcome-container'>
                <h1>Welcome to </h1>
                <h1>
                    My<span style={{ color: '#43AFFF' }}>Jobs</span>
                </h1>
                <div className='get-started'>
                    <CustomButton padding='14px 30px'>Get Started</CustomButton>
                </div>
            </div>
            <div className="office-girl-image" />
            <div className='why-us-container'>
                <h3 className='heading'>Why Us</h3>
                <CustomCards items={items} />
            </div>
            <div className='companies-container'>
                <h3 className='heading'>Companies Who Trust Us</h3>
                <CompaniesViewer />
            </div>
        </div>
    );
};

export default HomePage;
