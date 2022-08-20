import React from "react";
import axios from 'axios'
import ROUTES from "../../../src/api/routes";
import { Suspense } from "react";
import { useQuery } from '@tanstack/react-query';
import useSWR from 'swr'

function AllEvents() {
    const { data, error } = useSWR(ROUTES.GET_ALL_EVENTS, url => axios.get(url, { 
        method: 'GET',
        headers: {
            "Access-Control-Allow-Origin": "*",
            
        }

    }).then(res => res.data), { suspense: true})

    if(error) return <div>{error}</div>

    return (
        <div>
            {data.map((values, idx) => {
                return (
                    <div className="bg-white shadow-md" key={`event-${idx}`}>
                        {JSON.stringify(values)}
                    </div>
                )
            })}
        </div>
    )
}

export default function ALLEvent() {

    return (
        <Suspense
            fallback={<div>Loading...</div>}
        >
            <AllEvents />
        </Suspense>
    )
}
