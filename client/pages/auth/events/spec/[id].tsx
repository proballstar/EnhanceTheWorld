import { QueryKey, useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import axios from "axios"
import ROUTES from '../../../../src/api/routes';

export default function SpecificEvent(event) {

    return (
        <div>
            {JSON.stringify(event)}
        </div>
    )
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(ROUTES.GET_SPEC_EVENT(id));
  const event = await res.json();
  return { props: { event } };
}