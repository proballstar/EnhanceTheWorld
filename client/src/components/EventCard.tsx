import type { Event } from "../types/types"
import Img from 'next/image'
import axios from 'axios'
import { useAuth } from '../context/AuthContext';
import ROUTES from '../api/routes';
import Link from 'next/link';

export default function EventCard(props: Event) {

    const { user } = useAuth()

    return (
        <></>
    )
}