import { Route, Switch, Redirect } from 'react-router-dom';
import React, {useState} from 'react';
import './App.css';
// import FormInput from './components/form-input/form-input.component';
// import FormTextarea from './components/form-textarea/form-textarea.component';
// import CustomLabel from './components/custom-label/custom-label.component';
// import CustomButton from './components/custom-button/custom-button.component';
// import CustomCards from './components/custom-cards/custom-cards.component';
// import Pagination from '@material-ui/lab/Pagination';
// import TransitionsModal from './components/transitions-modal/transitions-modal.component';
// import ViewApplicants from './components/view-applicants/view-applicants.component';
import Header from './components/header/header.component';
import WithBackground from './components/with-background/with-background.component';
// import Form from './components/form/form.component';
import Login from './components/login/login.component';
import SignUp from './components/sign-up/sign-up.component';
// import PostJob from './components/post-job/post-job.component';
import HomePage from './pages/home-page.component';

function App() {
    const items = [
        {
            id: 1,
            title: 'Get more visibility',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            width: '260px',
            titleColor: 'black',
            location: 'Bangalore',
        },
        {
            id: 2,
            title: 'Organize your candidates',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            width: '260px',
            titleColor: 'black',
            location: 'Delhi',
        },
        {
            id: 3,
            title: 'Verify their abilities',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
            width: '260px',
            titleColor: 'black',
        },
        {
            id: 4,
            title: 'Verify their abilities',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
            width: '260px',
            titleColor: 'black',
        },
        {
            id: 5,
            title: 'Verify their abilities',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
            width: '260px',
            titleColor: 'black',
        },
        {
            id: 6,
            title: 'Verify their abilities',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
            width: '260px',
            titleColor: 'black',
        },
        {
            id: 7,
            title: 'Verify their abilities',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
            width: '260px',
            titleColor: 'black',
            location: 'Pune',
        },
        {
            id: 8,
            title: 'Verify their abilities',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
            width: '260px',
            titleColor: 'black',
        },
        {
            id: 9,
            title: 'Verify their abilities',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
            width: '260px',
            titleColor: 'black',
        },
        {
            id: 10,
            title: 'Verify their abilities',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
            width: '260px',
            titleColor: 'black',
        },
        {
            id: 11,
            title: 'Verify their abilities',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
            width: '260px',
            titleColor: 'black',
        },
        {
            id: 12,
            title: 'Verify their abilities',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
            width: '260px',
            titleColor: 'black',
        },
        {
            id: 13,
            title: 'Verify their abilities',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
            width: '260px',
            titleColor: 'black',
        },
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

    return (
        <div className='App'>
            {/* <Switch>
                <Route path='/:org/:repo/issues' component={IssueDetailsPage} />
                <Route component={NotFound} />
            </Switch> */}
            <Header />
            {/* <FormTextarea>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, praesentium? Unde quibusdam nostrum tempora voluptas provident laborum laudantium doloremque aliquid!</FormTextarea>
            <CustomLabel id='email'> Email address </CustomLabel>
            <FormInput placeholder='Enter your email' id='email' />
            <CustomButton type='submit' classic>
                Login
            </CustomButton>
            <CustomCards items={items} />
            <Pagination count={10} page={page} variant="outlined" color="primary" shape="rounded" onChange={handleChange}/>
            <TransitionsModal open={open} setOpen={setOpen}><ViewApplicants setOpen={setOpen}/></TransitionsModal> */}
            {/* <Form title="Login"/> */}
            {/* <Login /> */}
            {/* <SignUp /> */}
            {/* <PostJob /> */}
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route
                    exact
                    path='/login'
                    render={() =>
                      isLoggedIn ? (
                            <Redirect to='/' />
                        ) : (
                            <Login />
                        )
                    }
                />
                <Route
                    exact
                    path='/signup'
                    render={() =>
                      isLoggedIn ? (
                            <Redirect to='/' />
                        ) : (
                            <SignUp />
                        )
                    }
                />
            </Switch>
        </div>
    );
}

export default WithBackground(App);
