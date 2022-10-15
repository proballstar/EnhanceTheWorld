import axios from 'axios';
import ROUTES from '../../../../src/api/routes';
import { useAuth } from '../../../../src/context/AuthContext';
import EventCard from '../../../../src/components/EventCard';
import { Event } from '../../../../src/types/types';

export default function SpecificUser({ user }) {
    let events = [...new Set(user.events)];

    async function nominate() {
        const formData = new FormData()
        await fetch(ROUTES.CREATE_HERO) 
    }

    return (
        <div>
            <div>
                <img src={user.profile} />
            </div>
            <div>
                <button onClick={() => nominate()}>
                    Nominate to be a hero
                </button>
            {events.map((value: Object | any, idx) => {
                return (
                    <EventCard key={`event-${idx}`} {...value} />
                )
            })}
            </div>
        </div>
    )
}

export async function getServerSideProps(context) { 
    return {
        props: {
            user: {}
        }
    }
}