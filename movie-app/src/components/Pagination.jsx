import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getPage } from '../redux/actions/movieAction';
import './pagination.css';

const PaginationComponent = () => {
    const [pageCount, setPageCount] = useState(0);

    const dispatch = useDispatch();
    const pages = useSelector((state) => state.pageCount);

    useEffect(() => {
        setPageCount(pages);
    }, [pages]);

    const handlePageClick = (data) => {
        dispatch(getPage(data.selected + 1));
    };

    return (
        <div className="d-flex justify-content-center p-3">
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                marginPagesDisplayed={3}
                pageRangeDisplayed={2}
                pageCount={500}
                previousLabel="previous"
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                nextClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </div>
    );
};

export default PaginationComponent;
