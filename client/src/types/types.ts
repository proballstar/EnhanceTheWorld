export interface UserJoin {
    eid: string;
    cover: string;
    title: string;
    name: string;
}

export interface EventJoin  {
    uid: string;
    profile: string;
    name: string;
    bio: string;
}

export interface Event {
    cover: string;
    eid: string;
    joins: EventJoin[];
    latitude: number;
    likes: number;
    longitude: number;
    name: string;
    title: string;
    uid: string;
    desc: string;
}