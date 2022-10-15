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
        </>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            event: {}
        }
    }
}

{/* <Map
  location={{
    address: event.title,
    lat: Number(event.latitude),
    lng: Number(event.longitude),
  }}
/>; */}