import React from 'react'
import axios from 'axios'
import ROUTES from '../../../../src/api/routes'

export default function SpecificHero() {
  return (
    <div>SpecificHero</div>
  )
}

export async function getServerSideProps(context) {
    const heroes = await axios.get(ROUTES.GET_SPEC_EVENT(context.query['id']))
    const data = heroes.data
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