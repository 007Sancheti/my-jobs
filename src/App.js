import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import React from 'react';
import './App.scss';
import Header from './components/header/header.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import WithBackground from './higher-order-components/with-background/with-background.component';
import Login from './components/login/login.component';
import SignUp from './components/sign-up/sign-up.component';
import PostJob from './components/post-job/post-job.component';
import HomePage from './pages/home-page.component';
import ForgotPassword from './components/forgot-password/forgot-password.component';
import JobsPreview from './components/jobs-preview/jobs-preview.component';
import { setCurrentUser } from './redux/user/user.actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App({ currentUser, setCurrentUser }) {
    if (!currentUser && sessionStorage.getItem('user')) {
        setCurrentUser(JSON.parse(sessionStorage.getItem('user')));
    }

    let location = useLocation();
    let isLoginOrSignUpPage =
        location.pathname === '/login' || location.pathname === '/signup';

    return (
        <div className='App'>
            <ToastContainer />
            <Header
                isLoggedIn={currentUser}
                isLoginOrSignUpPage={isLoginOrSignUpPage}
            />
            <Switch>
                <Route
                    exact
                    path='/'
                    render={() =>
                        currentUser ? <Redirect to='/landing' /> : <HomePage />
                    }
                />
                <Route
                    exact
                    path='/post-job'
                    render={() =>
                        currentUser ? <PostJob /> : <Redirect to='/' />
                    }
                />
                <Route
                    exact
                    path='/landing'
                    render={() =>
                        currentUser ? <JobsPreview /> : <Redirect to='/' />
                    }
                />
                <Route
                    exact
                    path='/login'
                    render={() =>
                        currentUser ? <Redirect to='/landing' /> : <Login />
                    }
                />
                <Route
                    exact
                    path='/signup'
                    render={() =>
                        currentUser ? (
                            <Redirect to='/landing' />
                        ) : (
                            <SignUp toast={() => toast('Signup Successful')} />
                        )
                    }
                />
                <Route
                    exact
                    path='/forgot'
                    render={() =>
                        currentUser ? (
                            <Redirect to='/landing' />
                        ) : (
                            <ForgotPassword />
                        )
                    }
                />
            </Switch>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (currentUser) => dispatch(setCurrentUser(currentUser)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WithBackground(App));
