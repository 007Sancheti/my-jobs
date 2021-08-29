import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.scss';
// import FormInput from './components/form-input/form-input.component';
// import FormTextarea from './components/form-textarea/form-textarea.component';
// import CustomLabel from './components/custom-label/custom-label.component';
// import CustomButton from './components/custom-button/custom-button.component';
// import CustomCards from './components/custom-cards/custom-cards.component';
// import Pagination from '@material-ui/lab/Pagination';
// import TransitionsModal from './components/transitions-modal/transitions-modal.component';
// import ViewApplicants from './components/view-applicants/view-applicants.component';
import Header from './components/header/header.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import WithBackground from './components/with-background/with-background.component';
// import Form from './components/form/form.component';
import Login from './components/login/login.component';
import SignUp from './components/sign-up/sign-up.component';
import PostJob from './components/post-job/post-job.component';
import HomePage from './pages/home-page.component';
import ForgotPassword from './components/forgot-password/forgot-password.component';
import ResetPassword from './components/reset-password/reset-password.component';
import JobsPreview from './components/jobs-preview/jobs-preview.component';
import { setCurrentUser } from './redux/user/user.actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App({currentUser, setCurrentUser}) {
    const items = [
        {
            id: 1,
            title: 'Get more visibility',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            location: 'Bangalore',
        },
        {
            id: 2,
            title: 'Organize your candidates',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            location: 'Delhi',
        },
        {
            id: 3,
            title: 'Verify their abilities',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
        },
        {
            id: 4,
            title: 'Verify their abilities',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
        },
        {
            id: 5,
            title: 'Verify their abilities',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
        },
        {
            id: 6,
            title: 'Verify their abilities',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
        },        {
            id: 7,
            title: 'Get more visibility',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            location: 'Bangalore',
        },
        {
            id: 8,
            title: 'Organize your candidates',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            location: 'Delhi',
        },
        {
            id: 9,
            title: 'Verify their abilities',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
        },
        {
            id: 10,
            title: 'Verify their abilities',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
        },
        {
            id: 11,
            title: 'Verify their abilities',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
        },
        {
            id: 12,
            title: 'Verify their abilities',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
        }
    ];
    const [page, setPage] = React.useState(1);
    const [open, setOpen] = React.useState(false);
    const [isLoggedIn] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleChange = (event, value) => {
        setPage(value);
        handleOpen();
    };

    if(!currentUser && sessionStorage.getItem('user')) {
        setCurrentUser(JSON.parse(sessionStorage.getItem('user')));
    }

    let location = useLocation();
    let isLoginOrSignUpPage = (location.pathname === '/login') || (location.pathname === '/signup');

    return (
        <div className='App'>
            {/* <Switch>
                <Route path='/:org/:repo/issues' component={IssueDetailsPage} />
                <Route component={NotFound} />
            </Switch> */}
            <ToastContainer />
            <Header isLoggedIn={currentUser} isLoginOrSignUpPage={isLoginOrSignUpPage}/>
            {/* <FormTextarea>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, praesentium? Unde quibusdam nostrum tempora voluptas provident laborum laudantium doloremque aliquid!</FormTextarea>
            <CustomLabel id='email'> Email address </CustomLabel>
            <FormInput placeholder='Enter your email' id='email' />
            <CustomButton type='submit' classic>
                Login
            </CustomButton>
            <CustomCards items={items} />
            <TransitionsModal open={open} setOpen={setOpen}><ViewApplicants setOpen={setOpen}/></TransitionsModal> */}
            {/* <Form title="Login"/> */}
            {/* <Login /> */}
            {/* <SignUp /> */}
            {/* <PostJob /> */}
            {/* <Pagination count={10} page={page} variant="outlined" color="primary" shape="rounded" onChange={handleChange}/> */}
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
                        currentUser ? <Redirect to='/landing' /> : <SignUp toast={()=> toast('Signup Successful')} />
                    }
                />
                <Route
                    exact
                    path='/forgot'
                    render={() =>
                        currentUser ? <Redirect to='/landing' /> : <ForgotPassword />
                    }
                />
                <Route
                    exact
                    path='/reset'
                    render={() =>
                        currentUser ? <Redirect to='/landing' /> : <ResetPassword />
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

export default connect(mapStateToProps, mapDispatchToProps)(WithBackground(App));
