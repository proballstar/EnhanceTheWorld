import React from "react";
import axios from 'axios'
import ROUTES from "../../../src/api/routes";

export default function ALLEvent({heroes}) {
    return (
        <div>
            {JSON.stringify(heroes)}
            {heroes.map((values, index) => {
                return (
                    <div className="bg-white shadow-md" key={`event-${values}`}>
                        {JSON.stringify(values)}
                    </div>
                )
            })}
        </div>
    )
}

export async function getServerSideProps() {
    const heroes = await axios.get(ROUTES.ALL_HEROES)
    const data = heroes.data
    data.push({
        name: "HELLO HERO"
    })
    if (heroes.status === 200) {
        return {
            props: {
                heroes: data
            }
        }
    } else {
        throw new Error(`ERROR!`)
    }
}