import React from "react";
import WhoGetHelpCard from "./WhoGetHelpCard";

const organizationList = [
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

const Organizations = () => {
    return (
        <>
            <h4 className="foundations__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi aspernatur autem commodi consequuntur cupiditate, deleniti dolorem doloribus ducimus eveniet, explicabo fuga in ipsum itaque magni neque placeat porro repellendus saepe suscipit ut vel vitae voluptatum? Corporis fugiat minus modi possimus rem sit! Commodi, deleniti doloribus eum id minus reprehenderit!</h4>
            <ul>
                {organizationList?.map((organization, i) => (<WhoGetHelpCard
                    key={i}
                    title={organization.name}
                    mission={organization.mission}
                    stuff={organization.stuff}/>))}
            </ul>
        </>
    )
}
export default Organizations