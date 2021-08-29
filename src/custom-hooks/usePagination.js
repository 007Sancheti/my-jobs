import { useState, useEffect } from 'react';

const PAGE_LIMIT = 8;

const usePagination = (items) => {
    const [data] = useState(items);
    const [slicedData, setSlicedData] = useState([]);
    const setPage = (page) => {
        let index = PAGE_LIMIT * (page - 1);
        setSlicedData(data.slice(index, index + PAGE_LIMIT));
    };
    useEffect(() => {
        setPage(1);
    }, [])
    return [slicedData, setPage];
};

export default usePagination;
