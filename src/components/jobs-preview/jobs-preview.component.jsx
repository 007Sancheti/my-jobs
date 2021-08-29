import React, { useState, useEffect, useCallback } from 'react';
import CustomCards from '../custom-cards/custom-cards.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { getAllJobs } from '../../api';
import PaginationContainer from '../pagination/pagination.component';
import './jobs-preview.styles.scss';

const JobsPreview = ({ currentUser }) => {
    let [items, setItems] = useState([]);
    let [slicedItems, setSlicedItems] = useState([]);
    useEffect(() => {
        if (currentUser) {
            let headers = {
                Authorization: currentUser.token,
            };
            getAllJobs(headers).then((res) => {
                if (res.message) {
                    return;
                } else {
                    setItems(res.data.data);
                }
            });
        }
    }, []);
    const computeSlicedItems = useCallback(
        (slicedItems) => {
            setSlicedItems(slicedItems);
        },
        [setSlicedItems]
    );
    return (
        <div className='jobs-preview'>
            <h3 className='title'>Jobs posted by you</h3>
            <CustomCards
                width='260px'
                titleColor='#303F60'
                items={slicedItems}
            />
            {items.length && (
                <PaginationContainer
                    items={items}
                    setSlicedItems={computeSlicedItems}
                />
            )}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(JobsPreview);
