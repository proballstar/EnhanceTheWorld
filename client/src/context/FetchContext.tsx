import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios'
import ROUTES from "../api/routes";

const FetchContext = createContext({})


export default function FetchProvider({ children }: { children: React.ReactNode }) {
  
    async function UserByEmail(uid: string, bio: string, name: string, profile: File) {
        const formData = new FormData()
        formData.append("uid", uid)
        formData.append("bio", bio)
        formData.append("name", name)
        formData.append("profile", profile)
        await axios.post(ROUTES.CREATE_USER_EMAIL, formData)
    }

    async function UserByGoogle(uid: string, bio: string, name: string, profile: string) {
        const formData = new FormData()
        formData.append("uid", uid)
        formData.append("bio", bio)
        formData.append("name", name)
        formData.append("profile", profile)
        return axios.post(ROUTES.CREATE_USER_GOOGLE, formData)
    }

    async function AllEvents() {
        return await (await axios.get(ROUTES.GET_ALL_EVENTS)).data
    }


    // async function DistanceEvents(latitude: number, longitude: number, distance: number) {
    //     const Data = new FormData()
    //     let _data = {
    //         latitude: String(latitude),
    //         longitude: String(longitude),
    //         distance: String(distance)
    //     }

    //     for (let i = 0; i < Object.keys(_data).length; i++) {
    //         let value = Object.values(_data)[i]
    //         Data.append(Object.keys(_data)[i], value)
    //     }

    //     return await (await axios.get(`${ROUTES.DONATE_EVENT}?${PARAMS.toString()}`)).data
    // }

    async function GetEvent(eid: string) {
        const PARAMS = new URLSearchParams({
            eid: String(eid)
        })

        return await (await axios.get(`${ROUTES.GET_SPEC_EVENT}?${PARAMS.toString()}`)).data
    }

    async function EventsDonate(uid: string, amt: string, eid: string) {
        const data = new FormData()
        data.append("eid", String(eid))
        data.append("amt", String(amt))
        data.append("uid", String(uid))
        return await axios.post(ROUTES.DONATE_EVENT, data)
    }

    async function LikeEvent(uid: string, eid: string) {
        const data = new FormData()
        data.append("uid", uid)
        data.append("eid", eid)
        return await axios.post(ROUTES.LIKE_EVENT, data)
    }

    async function CommentEvent(uid: string, body: string, eid: string) {
        const data = new FormData()
        data.append("uid", uid)
        data.append("body", body)
        data.append("eid", eid)
        return await axios.post(ROUTES.COMMENT_EVENT, data)
    }

    async function JoinEvent(uid: string, eid: string) {
        const data = new FormData()
        data.append("uid", uid)
        data.append("eid", eid)
        return await axios.post(ROUTES.JOIN_EVENT, data)
    }

    async function CreateEvent(latitude: number, longitude: number, desc: string, cover: File, uid: string, title: string) {
        const data = new FormData()
        data.append("longitude", String(latitude))
        data.append("latitude", String(longitude))
        data.append("uid", uid)
        data.append("title", title)
        data.append("desc", desc)
        data.append("cover", cover)
        return await axios.post(ROUTES.CREATE_EVENT, data)
    }

    async function MapRender() {
        return await (await axios.get(ROUTES.EVENT_MAP)).data
    }

    async function GetUser(uid: string, rid: string) {
        const PARAMS = new URLSearchParams({
            uid: String(uid)
        })

        await (await axios.get(ROUTES.GET_USER(uid, rid)))
    }

    async function CreateHero(merchandise: string, img: File, description: string, name: string, uid: string) {

    }

    async function AllHeroes() {

    }

    async function DonateHero(hid: string, uid: string, amount: number) {

    }

    async function FindHero() {

    }

    async function GetOneHero(hid: string) {

    }

    async function FollowHero(hid: string, uid: string) {

    }

    return (
        <FetchContext.Provider value={{}}>
            {children}
        </FetchContext.Provider>
    )
}