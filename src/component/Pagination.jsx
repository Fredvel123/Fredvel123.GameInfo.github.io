import React, { Fragment } from 'react'

function Pagination({pagination, next, prev}) {
  
  return (
    <Fragment>
      {pagination ? (
        <div>
          {pagination.previous ? <button onClick={prev}>Previous page</button> : null}
          
          {pagination.next ? <button onClick={next} >Next page</button> : null}

        </div>
      ) : null}
    </Fragment>
  );
}
export default Pagination;
