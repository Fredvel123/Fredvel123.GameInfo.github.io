import React, { Fragment } from 'react'


function Pagination({pagination, next, prev}) {
  
  return (
    <Fragment>
      {pagination ? (
        <div className="next-prev">
          {pagination.previous ? <a href="#header" onClick={prev}  className="btn-next">Previous</a> : null}
          
          {pagination.next ? <a href="#header" onClick={next}  className="btn-next">Next</a> : null}

        </div>
      ) : null}
    </Fragment>
  );
}
export default Pagination;
