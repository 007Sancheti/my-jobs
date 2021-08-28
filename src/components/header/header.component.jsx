import React, {useState} from 'react';
import './header.styles.scss';
import Avatar from 'react-avatar';
import CustomButton from '../custom-button/custom-button.component';

const Header = () => {
    const [showLogout, setShowLogout] = useState(false);
    const [isLoggedIn] = useState(false);
    const [isLoginOrSignUpPage] = useState(false);
    return (
        <div className='header-container'>
            <div className='logo'>
                <span style={{ color: '#fff' }}>My</span>
                <span style={{ color: '#43AFFF' }}>Jobs</span>
            </div>
            {isLoggedIn ? (<div className="header-items">
                <a className="post-job-link" href="www.link.com">Post a job</a>
                <Avatar className="avatar" size="40px" color="#D9EFFF" fgColor="#303F60" name="Recruiter" round />
                <div className="dropdown" onClick={()=>setShowLogout(prevState => !prevState)}></div>
                {showLogout && <div className="logout-button">Logout</div>}
            </div>):
            !isLoginOrSignUpPage && (<CustomButton padding="14px 23px" classic>Login/Signup</CustomButton>)
            }
        </div>
    );
};

export default Header;
