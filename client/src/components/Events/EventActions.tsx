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
        wallet?: boolean;
    }
}

export default function EventActions({eid, paypal, crypto, methods}: EventActionProps) {
    
    const { user, Moralis, authenticate } = useMoralis()
    const { user: FirebaseUser } = useAuth()

    return (
        <></>
    )
}