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
          {/* Header */}
          <div className="bg-gray-300 justify-center items-center">
            <img src={user.profile} className="rounded-full mx-auto " />
            <p className="center mx-auto justify-center items-center">
              {user.bio}
            </p>
            <div>
              <button
                className="flex flex-row bg-red-500 my-3 py-3 px-5 rounded-lg text-white font-semibold"
                onClick={() => nominate()}
              >
                <img className='h-8 text-white pr-2' src="https://cdn-icons-png.flaticon.com/512/7803/7803467.png" />
                Nominate to be a hero
              </button>
            </div>
          </div>
        </div>
        {/* Grid */}
        <div>
          <h1 className="text-3xl font-bold font-serif">Events:</h1>
          {/* Events Joined */}
          {events.map((value: Object | any, idx) => {
            return <EventCard key={`event-${idx}`} {...value} />;
          })}
          {/* Comments */}
          {user.comments.map((value: Object | any, idx) => {
            return <EventCard key={`event-${idx}`} {...value} />;
          })}
          {/* Donations */}
          <div>
            {user.donations.total}
            <button onClick={() => nominate()}>Nominate to be a hero</button>
            {user.donations.events.map((value: Object | any, idx) => {
              return <EventCard key={`event-${idx}`} {...value} />;
            })}
            {user.donations.heroes.map((value: Object | any, idx) => {
              return <EventCard key={`event-${idx}`} {...value} />;
            })}
          </div>
        </div>
      </div>
    );
}

export async function getServerSideProps(context) { 
    let uuid = context.query['uuid']
    let fetchRequest = await fetch(ROUTES.GET_USER(uuid, uuid))
    let response = await fetchRequest.json()
    return {
        props: {
            user: response
        }
    }
}