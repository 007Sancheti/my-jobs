import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Avatar from 'react-avatar';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { setCurrentUser } from '../../redux/user/user.actions';
import './header.styles.scss';

const Header = ({
    history,
    currentUser,
    isLoggedIn,
    isLoginOrSignUpPage,
    setCurrentUser,
}) => {
    const [showLogout, setShowLogout] = useState(false);
    return (
        <div className='header-container'>
            <Link className='logo' to='/'>
                <span style={{ color: '#fff' }}>My</span>
                <span style={{ color: '#43AFFF' }}>Jobs</span>
            </Link>
            {isLoggedIn ? (
                <div className='header-items'>
                    <Link className='post-job-link' to='/post-job'>
                        Post a job
                    </Link>
                    <Avatar
                        className='avatar'
                        size='40px'
                        color='#81b5db'
                        fgColor='#303F60'
                        name={currentUser.name}
                        round
                    />
                    <div
                        className='dropdown'
                        onClick={() => setShowLogout((prevState) => !prevState)}
                    ></div>
                    {showLogout && (
                        <div
                            onClick={() => {
                                setShowLogout(false);
                                setCurrentUser();
                                history.push('/');
                            }}
                            className='logout-button'
                        >
                            Logout
                        </div>
                    )}
                </div>
            ) : (
                !isLoginOrSignUpPage && (
                    <CustomButton
                        onClick={() => {
                            history.push('/login');
                        }}
                        padding='14px 23px'
                        classic
                    >
                        Login/Signup
                    </CustomButton>
                )
            )}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: () => dispatch(setCurrentUser(null)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
