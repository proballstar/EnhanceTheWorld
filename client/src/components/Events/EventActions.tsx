import React from "react"
import { useMoralis, Web3TransferFetchOptions } from "react-moralis";
import { useAuth } from '../../context/AuthContext';
import ROUTES from '../../api/routes';
import axios from 'axios';

interface EventActionProps {
    eid: string;
    paypal: string;
    crypto: string;
    methods: {
        paypal?: boolean;
        crypto?: wallet;
    }
}

export default function EventActions({eid, paypal, crypto, methods}: EventActionProps) {
    
    const { user, Moralis, authenticate } = useMoralis()
    const { user: FirebaseUser } = useAuth()

    async function donatePal() {
        window.location.href = paypal
    }

    async function donateCrypto() {
        let amt = prompt("How many ETH would you like to give to the Event Organizer")
        await authenticate({ signingMessage: "Sign into Enhance the World" })
        const options = {
            type: "native",
            amount: Moralis.Units.ETH(amt),
            receiver: crypto
        }
        await Moralis.transfer(options)
    }

    async function join() {
        const formData = new FormData()
        formData.append("uid", FirebaseUser.uid)
        formData.append("eid", eid)
        const headers = new Headers({
            'Content-Type': 'multipart/form-data'
        })
        await axios.post(ROUTES.JOIN_EVENT, formData)
    }

    async function like() {
        const formData = new FormData();
        formData.append("uid", FirebaseUser.uid);
        formData.append("eid", eid);
        const headers = new Headers({
          "Content-Type": "multipart/form-data",
        });
        await axios.post(ROUTES.LIKE_EVENT, formData);
    }
    
    return (
        <div className="flex m-auto justify-center space-x-6 p-3">
            {methods.paypal ? <button onClick={() => donatePal()} className="bg-blue-300 text-black font-semibold py-3 px-5 rounded-lg shadow-md">
                Paypal Donate
            </button>: null}
            {methods.wallet ? <button onClick={() => donateCrypto()} className="bg-blue-300 text-black font-semibold py-3 px-5 rounded-lg shadow-md">
                Metamask Donate
            </button> : null}
            <button onClick={() => join()} className="bg-green-300 text-black font-semibold py-3 px-5 rounded-lg shadow-md">
                Join
            </button>
            <button onClick={() => like()} className="bg-red-300 text-black font-semibold py-3 px-5 rounded-lg shadow-md">
                Like
            </button>
        </div>
    )
}