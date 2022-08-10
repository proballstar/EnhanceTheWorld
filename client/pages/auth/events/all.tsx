import React from "react";
import axios from 'axios'
import ROUTES from "../../../src/api/routes";
import EventCard from "../../../src/components/EventCard";

export default function ALLEvent({events}) {
    return (
        <div className="p-3 space-y-5">
            {events.map((values, index) => {
                return (
                    <EventCard key={`event-card-${index}`} {...values} />
                )
            })}
        </div>
    )
}

export async function getServerSideProps() {
    const events = await axios.get(ROUTES.GET_ALL_EVENTS)
    const data = events.data
    if (events.status === 200) {
        return {
            props: {
                events: data
            }
        }
    } else {
        throw new Error(`ERROR!`)
    }
}