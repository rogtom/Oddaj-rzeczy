import React from "react";
import {useLatest} from "react-use";
import WhoGetHelpCard from "./WhoGetHelpCard";

const foundationsList = [
    {
        name: 'Fundacja “Dbam o Zdrowie”',
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
        name: 'Fundacja “Dbam o Zdrowie”',
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
        name: 'Fundacja “Dbam o Zdrowie”',
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
    return (
        <>
            <h4 className="foundations__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur eos error eveniet facere, fugit itaque, laborum modi nihil numquam officia omnis quae quas rem repudiandae rerum similique sint voluptates.</h4>
            <ul>
                {foundationsList?.map((foundation, i) => (<WhoGetHelpCard
                    key={i}
                    title={foundation.name}
                    mission={foundation.mission}
                    stuff={foundation.stuff}/>))}
            </ul>
        </>
    )
}
export default Foundations