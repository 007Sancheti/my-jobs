import React, { useEffect } from 'react';
import './pagination.styles.scss';
import Pagination from '@material-ui/lab/Pagination';
import usePagination from '../../custom-hooks/usePagination';

const PAGE_LIMIT = 8;

const PaginationContainer = ({ items, setSlicedItems }) => {
    let count = Math.ceil(items.length / PAGE_LIMIT);
    console.log(items);
    const handleChange = (event, value) => {
        setPage(value);
        setPagination(value);
    };

    const [page, setPage] = React.useState(1);
    const [slicedData, setPagination] = usePagination(items);
    useEffect(() => {
        setSlicedItems(slicedData);
    }, [slicedData, setSlicedItems]);

    return (
        <div className='pagination-container'>
            <Pagination
                count={count}
                page={page}
                variant='outlined'
                color='primary'
                shape='rounded'
                onChange={handleChange}
            />
        </div>
    );
};

export default PaginationContainer;
