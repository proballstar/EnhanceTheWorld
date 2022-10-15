import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import axios from 'axios'

type UserEmailParams<F> =  {
    uid: any;
    bio: string;
    name: string;
    profile: F;
    merch: string;
    paypal: string;
    wallet: string
}

axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.baseURL = "https://EnhanceTheWorld.epiccodewizard2.repl.co";

function Form(d: Object) {
    const keys = Object.keys(d)
    const len = keys.length
    const data = new FormData()
    for (let i = 0; i < len; i++) {
        let value = d[keys[i]]
        data.append(keys[i], value)
    }
    return data
}

export async function UserEmail(params: UserEmailParams<File>) {
    const p = {
        "uid": params.uid,
        "bio": params.bio,
        "name": params.name,
        "profile": params.profile,
        "donations": 0,
        "merchandise": params.merch,
        "paypal": params.paypal,
        "wallet": params.wallet
    }

    await axios.post("/user/create/email", Form(p))
}

export async function UserGoogle(params: UserEmailParams<string>) {
    const p = {
        "paypal": params.paypal,
        "wallet": params.wallet,
        "uid": params.uid,
        "bio": params.bio,
        "name": params.name,
        "profile": params.profile,
        "merchandise": params.merch,
    }
    await axios.post("/user/create/google", Form(p))
}