
 const Paginator = (
  {  page,
    pageCount,
    onClickPrev,
  
    total,
    onClickNext}) => {
    return (
      <div className="flex flex-col justify-center items-center">
        <p className="text-sm text-gray-600 mx-3">
          Page{" "}
          <span className="mx-1 font-semibold text-gray-900 text-md-1">
            {page}
          </span>{" "}
          to
          <span className="mx-1 font-smeibold text-gray-900">{pageCount}</span> of
          <span className="mx-1 font-semibold text-gray-900">{total}</span>{" "}
          Records
        </p>
  
<div className="flex items-center">
            <button
          type="button"
          className=" text-white rounded-l-md border-r border border-gray-100 flex items-center justify-center px-4 h-10 me-3 text-base font-medium rounded-lg bg-primary hover:bg-secondry  hover:text-white  disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:cursor-not-allowed"
          disabled={page === 1 }
          onClick={onClickPrev}
        >
          <svg
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </button>
        <button
          type="button"
          className="bg-primary hover:bg-secondry  text-white rounded-l-md border-r border border-gray-100 flex items-center justify-center px-4 h-10 me-3 text-base font-medium rounded-lg  hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:cursor-not-allowed"
          disabled={page === pageCount }
          onClick={onClickNext}
        >
          Next
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
</div>
      </div>
    );
  };
  
  export default Paginator;
  