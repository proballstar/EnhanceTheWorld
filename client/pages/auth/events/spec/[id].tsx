import { QueryKey, useQuery } from "@tanstack/react-query"
import { useRouter, NextRouter } from 'next/router';
import axios from "axios"
import ROUTES from '../../../../src/api/routes';
import { useRef, useState, useEffect } from 'react'
import Map from "../../../../src/components/Map";
import Link from 'next/link';
import EventActions from "../../../../src/components/Events/EventActions";


export default function SpecificEvent({event}) {

    const router: NextRouter = useRouter()

    return (
        <>
        <div>
            {/* Header */}
            <div>
                <img src={event.cover} className="m-auto w-1/2 shadow-md rounded-lg opacity-80" />
            </div>
            <div className="text-center font-bold text-3xl py-3">
                {event.title} by <i onClick={() => router.push(`/auth/user/spec/${event.uid}`)}>{event.name}</i>
                <div className="text-center font-normal text-xl" dangerouslySetInnerHTML={{ __html: event.desc }} />
                    <EventActions crypto={event.wallet} eid={event.eid} paypal={event.paypal} methods={event.methods} />
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2">
                {/* Column 1 */}
                <div className="col-span-1 bg-gray-300">
                    {event.joins.map((person, idx) => {
                        return (
                            <Link key={`person-join-${idx}`} href={`/auth/user/spec/${person.uid}`}>
                                <div className="cursor-pointer flex">
                                    <img src={person.profile} className="w-8 h-8 x-2 rounded-full shadow-md" />
                                    <div className="text-2xl font-bold">{person.name}</div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                {/* Column 2 */}
                <div className="col-span-1">
                    <Map
                        location={{
                            address: event.title,
                            lat: Number(event.latitude),
                            lng: Number(event.longitude),
                        }}
                    />
                </div>
        </div>
        </>
    )
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(ROUTES.GET_SPEC_EVENT(id));
  const event = await res.json();
  return { props: { event: event } };
}