import React from "react";
import axios from 'axios'

export default function ALLEvent({events}) {
    return (
        <div className="p-3 space-y-5">
            {events.map((values, keys) => {
                return (
                    <div className="rounded-md shadow-md w-1/2" key={`event-listing-${keys}`}>
                        <img className="w-full" src={values.cover} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{values.title}
                                <p className="text-gray-700 text-base" dangerouslySetInnerHTML={{__html: values.desc}} />
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Likes: {values.likes}</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Joins: {values.joins.length}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export async function getServerSideProps() {
    
    const posts = await axios.get("/events/all")
    const data = posts.data;

    return {
        props: {
            events: data
        }
    }
}