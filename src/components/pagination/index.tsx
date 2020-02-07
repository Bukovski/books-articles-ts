import React from "react";
import ReactPaginate from "react-paginate";
import "./pagination.sass";


interface IPagination {
  pageCount: number,
  handlePageClick: (data: object) => void
}


export const Pagination = (props: IPagination) => {
  const { pageCount, handlePageClick } = props;
  
  return (
    <div className="pagination__wrap">
      <ReactPaginate
        previousLabel={ '<' }
        nextLabel={ '>' }
        breakLabel={ '...' }
        breakClassName={ 'page-link' }
        previousClassName={ 'page-link' }
        nextClassName={ 'page-link' }
        pageCount={ pageCount }
        marginPagesDisplayed={ 1 }
        pageRangeDisplayed={ 3 }
        onPageChange={ handlePageClick }
        containerClassName={ 'pagination justify-content-center' }
        pageClassName={ 'page-item' }
        pageLinkClassName={ 'page-link' }
        activeClassName={ 'active' }
      />
    </div>
  )
};