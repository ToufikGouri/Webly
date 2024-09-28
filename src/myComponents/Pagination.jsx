import React, { useEffect, useState } from 'react'

// pass dataLength safely using data?.length
const Pagination = ({ dataLength, limit, page, setPage, searchParams, setSearchParams }) => {

    const [paginationArray, setPaginationArray] = useState([])
    const maxVisiblePages = 4; // number of pages to show

    const generatePaginationArray = (currentPage) => {
        const pages = [1]; // always include the first page for quick jump to 1
        const startPage = Math.max(currentPage - 1, 2); // start from currentPage - 1 but minimum of 2
        const endPage = Math.max(currentPage + 1, maxVisiblePages); // end at currentPage + 1

        // Add the visible page numbers
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        if (dataLength === limit) pages.push('...');

        return pages;
    };

    const handlePagination = (val) => {
        if (val === "...") return
        if (val > page && dataLength < limit) return;    // for last page
        setPage(val)
        setSearchParams({ page: val })
        window.scrollTo({ top: "0", behavior: "smooth" })   // scroll on top
    }

    useEffect(() => {
        const currPage = parseInt(searchParams.get("page")) || 1

        if (currPage === 1) {       // clear url if page is 1
            setSearchParams(searchParams.delete("page"))
        } else {
            setPage(currPage)
        }
        // updating pagination array
        setPaginationArray(generatePaginationArray(currPage))
    }, [])

    return (
        <>
            {dataLength ?
                <div className='flex justify-center space-x-2'>
                    {paginationArray.map((val) =>
                        <button key={val} onClick={() => handlePagination(val)} className={`size-8 grid place-items-center rounded-full ${page === val ? "bg-primaryBlue hover:bg-primaryBlue/80" : "hover:text-primaryBlue"}`}>
                            {val}
                        </button>
                    )}
                    {dataLength === limit ?
                        <button onClick={() => handlePagination(page + 1)} className={`size-8 grid place-items-center rounded-lg border border-primaryBlue hover:bg-primaryBlue w-16`}>Next</button>
                        : <p onClick={() => handlePagination(page + 1)} className={`size-8 grid place-items-center rounded-lg bg-red-500 w-16`}>End</p>
                    }
                </div>
                : <div className='flex items-center'>
                    <h1>It Looks Like You Are Too Ahead</h1>
                    <button onClick={() => handlePagination(1)} className={`size-8  grid place-items-center rounded-lg border border-primaryBlue hover:bg-primaryBlue w-28 ms-2`}>Back To First</button>
                </div>
            }
        </>
    )
}

export default Pagination