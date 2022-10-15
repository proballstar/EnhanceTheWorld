import type { Event } from "../types/types"
import Img from 'next/image'
import axios from 'axios'
import { useAuth } from '../context/AuthContext';
import ROUTES from '../api/routes';
import Link from 'next/link';

export default function EventCard(props: Event) {

    const { user } = useAuth()

    async function handleLike() {
        const formData = new FormData()
        formData.append("uid", user.uid)
        formData.append("eid", props.eid)
        await axios.post(ROUTES.LIKE_EVENT, formData)
    }

    //async function handleCryptoDonate() {
    //    const amt = window.prompt("What amount do you want to donate (in ethereum; just the number)")
     //   var amount = parseInt(amt)

    //}

    async function handleJoin() {
        const formData = new FormData()
        formData.append("uid", user.uid)
        formData.append("eid", props.eid)
        await axios.post(ROUTES.JOIN_EVENT, formData)
    }

    return (
        <Link href={`/auth/events/spec/${props.eid}`}>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-xl">
            <img className="w-full" src={props.cover} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.title}</div>
                <p className="text-gray-700 text-base" dangerouslySetInnerHTML={{__html: props.desc}} />
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                </span>
                <span onClick={handleJoin} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Join
                </span>
                <span onClick={handleLike} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Like {props.title}
                </span>
                </div>
            </div>
        </Link>
    )
}