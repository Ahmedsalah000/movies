
import { useEffect, useState } from 'react';
// import { Pagination } from 'react-bootstrap'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getPage } from '../redux/actions/movieAction';
import './pagination.css'; // 
const PaginationComponent = () => {
    const [pageCount, setpageCount] = useState(0)

    const dispatch = useDispatch()
    const pages = useSelector((state) => state.pageCount)

    useEffect(() => {

        setpageCount(pages)
    }, [])

    const handlePageClick = (data) => {

        dispatch(getPage(data.selected + 1))
    }
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="التالى"
            onPageChange={handlePageClick}
            marginPagesDisplayed={3}
            pageRangeDisplayed={2}
            pageCount={500}
            previousLabel="السابق"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-ite"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
    );
}

export default PaginationComponent