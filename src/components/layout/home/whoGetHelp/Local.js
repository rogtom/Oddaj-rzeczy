import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';

import WhoGetHelpCard from "./WhoGetHelpCard";


const LocalCharity = ({charities}) => {
    console.log(charities.charities)

    const [pagination, setPagination] = useState({
        data: charities.charities.locals.localList,
        offset: 0,
        numberPerPage: 3,
        pageCount: 0,
        currentData: [],
    });

    const handlePageClick = event => {
        const selected = event.selected;
        const offset = selected * pagination.numberPerPage
        setPagination({ ...pagination, offset })
    }

    useEffect(() => {
        setPagination((prevState) => ({
            ...prevState,
            pageCount: prevState.data.length / prevState.numberPerPage,
            currentData: prevState.data.slice(pagination.offset, pagination.offset + pagination.numberPerPage)

        }))


    }, [pagination.data, pagination.numberPerPage, pagination.offset])

    return (
        <>
            <h4 className="foundations__description">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
                współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</h4>
            <ul>
                {pagination.currentData?.map((foundation, i) => (<WhoGetHelpCard
                    key={i}
                    title={foundation.name}
                    mission={foundation.mission}
                    stuff={foundation.stuff}/>))}
            </ul>

            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={pagination.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                pageClassName={'page'}
                activeClassName={'active'}
                previousClassName={'prev'}
                nextClassName={'next'}
            />


        </>
    )
}
export default LocalCharity