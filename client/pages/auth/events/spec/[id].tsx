import { QueryKey, useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import axios from "axios"
import ROUTES from '../../../../src/api/routes';
import { useRef, useState, useEffect } from 'react'
import Map from "../../../../src/components/Map";
import Link from 'next/link';


export default function SpecificEvent({event}) {

    return (
        <div>
            {/* Header */}
            <div>
                <img src={event.cover} className="m-auto w-1/2 shadow-md rounded-lg opacity-80" />
            </div>
            <p className="text-center font-bold text-3xl py-3">{event.title} by <i>{event.name}</i></p>
            <div className="text-center font-normal text-xl" dangerouslySetInnerHTML={{ __html: event.desc }} />
            <div className="flex m-auto justify-center space-x-6 p-3">
                <button className="bg-blue-300 text-black font-semibold py-3 px-5 rounded-lg shadow-md">
                    Donate
                </button>
                <button className="bg-green-300 text-black font-semibold py-3 px-5 rounded-lg shadow-md">
                    Join
                </button>
                <button className="bg-red-300 text-black font-semibold py-3 px-5 rounded-lg shadow-md">
                    Like
                </button>
            </div>
            {/* 2 columns (md: 1 col)*/}
            <div className="grid grid-cols-2 md:grid-cols-2">
                {/* Column 1 */}
                <div className="col-span-1 bg-gray-300">
                    {event.joins.map((person, idx) => {
                        return (
                            <Link key={`person-join-${idx}`} href={`/auth/user/spec/${person.uid}`}>
                                <div className="cursor-pointer flex">
                                    <img src={person.profile} />
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
        </div>
    )
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(ROUTES.GET_SPEC_EVENT(id));
  const event = await res.json();
  return { props: { event: event } };
}