import { QueryKey, useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import axios from "axios"
import ROUTES from '../../../../src/api/routes';
import { useRef, useState, useEffect } from 'react'
import Map from "../../../../src/components/Map";


export default function SpecificEvent({event}) {

    return (
        <div>
            {JSON.stringify(event.event)}
            <img
                src={event.cover}
            />
            <h1>
                {event.title} by {event.name}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: event.desc }} />
            <Map
                location={{
  address: event.title,
  lat: Number(event.latitude),
  lng: Number(event.longitude),
}} />
        </div>
    )
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(ROUTES.GET_SPEC_EVENT(id));
  const event = await res.json();
  return { props: { event: event } };
}