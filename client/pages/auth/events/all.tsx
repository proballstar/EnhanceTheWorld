import React from "react";
import axios from 'axios'
import ROUTES from "../../../src/api/routes";
import EventCard from "../../../src/components/EventCard";

export default function ALLEvent({events}) {
    return (
        <div className="p-3 space-y-5">

        </div>
    )
}

export async function getServerSideProps() {
    return {
        props: {
            events: []
        }
    }
}