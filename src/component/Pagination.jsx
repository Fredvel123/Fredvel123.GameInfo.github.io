import React, { Fragment } from 'react'


function Pagination({pagination, next, prev}) {
  
  return (
    <Fragment>
      {pagination ? (
        <div className="next-prev">
          {pagination.previous ? <p href="#!" onClick={prev}  className="btn-next">Previous page</p> : null}
          
          {pagination.next ? <p href="#!" onClick={next}  className="btn-next">Next page</p> : null}

        </div>
      ) : null}
    </Fragment>
  );
}
export default Pagination;
