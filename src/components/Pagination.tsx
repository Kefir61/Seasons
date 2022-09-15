import React, { useEffect } from 'react'
import ReactPaginate from 'react-paginate';
type PaginationProps = {
     onChangePage: (page: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({ onChangePage }) => {
     return (
          <ReactPaginate
               className='paginate'
               breakLabel="..."
               nextLabel=">"
               onPageChange={(event) => onChangePage(event.selected + 1)}
               pageRangeDisplayed={8}
               pageCount={2}
               previousLabel="<"
          />
     )
}

export default Pagination