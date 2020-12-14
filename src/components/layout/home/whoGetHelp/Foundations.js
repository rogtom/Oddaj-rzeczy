import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';

import WhoGetHelpCard from "./WhoGetHelpCard";

const foundationsList = [
    {
        name: 'Fundacja “Dbam o Zdrowie1”',
        mission: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
        stuff: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki',
    },
    {
        name: 'Fundacja “Dla dzieci”',
        mission: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
        stuff: 'ubrania, meble, zabawki',
    },
    {
        name: 'Fundacja “Bez domu”',
        mission: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
        stuff: 'ubrania, jedzenie, ciepłe koce',
    },
    {
        name: 'Fundacja “Dbam o Zdrowie2”',
        mission: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
        stuff: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki',
    },
    {
        name: 'Fundacja “Dla dzieci”',
        mission: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
        stuff: 'ubrania, meble, zabawki',
    },
    {
        name: 'Fundacja “Bez domu”',
        mission: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
        stuff: 'ubrania, jedzenie, ciepłe koce',
    },
    {
        name: 'Fundacja “Dbam o Zdrowie3”',
        mission: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
        stuff: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki',
    },
    {
        name: 'Fundacja “Dla dzieci”',
        mission: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
        stuff: 'ubrania, meble, zabawki',
    },
    {
        name: 'Fundacja “Bez domu”',
        mission: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
        stuff: 'ubrania, jedzenie, ciepłe koce',
    },
]

const Foundations = () => {

    const [pagination, setPagination] = useState({
        data: foundationsList,
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
                pageClassName={'page'}
            />


        </>
    )
}
export default Foundations