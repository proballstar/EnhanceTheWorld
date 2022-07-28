const base = `https://EnhanceTheWorld.epiccodewizard2.repl.co`

const ROUTES = {
    CREATE_USER_EMAIL: `${base}/user/create/email`,
    CREATE_USER_GOOGLE: `${base}/user/create/google`,
    GET_ALL_EVENTS: `${base}/events/all`,
    GET_EVENTS_BY_DISTANCE: (lat: string, long: string) => `${base}/events/distance?latitude=${lat}&longitude=${long}&distance=${15}`,
    GET_SPEC_EVENT: (eid: string) => `${base}/events/get?eid=${eid}`,
    DONATE_EVENT: `${base}/events/donate`,
    LIKE_EVENT: `${base}/events/like`,
    COMMENT_EVENT: `${base}/events/comment`,
    JOIN_EVENT: `${base}/events/join`,
    CREATE_EVENT: `${base}/events/create`,
    EVENT_MAP: `'${base}/events/map`,
    GET_USER: (uid: string, rid: string) => `${base}/user/get?rid=${rid}&uid=${uid}`,
    CREATE_HERO: `${base}/hero/create`,
    ALL_HEROES: `${base}/hero/all`,
    DONATE_HERO: (hid: string, uid: string, amount: number) => `${base}/hero/donate?hid=${hid}&uid=${uid}&amount=${amount}`,
    GET_HERO: (hid: string) => `${base}/hero/get_one?hid=${hid}`,
    FOLLOW_HERO: (hid: string, uid: string) => `${base}/hero/follow?hid=${hid}&uid=${uid}`
}

export default ROUTES 