import React from "react";
import axios from 'axios'
import ROUTES from "../../../src/api/routes";

export default function ALLEvent({events}) {
    return (
        <div>
            {JSON.stringify(events)}
            {events.map((values, index) => {
                return (
                    <div key={`event-${values}`}>
                        {JSON.stringify(values)}
                    </div>
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