import Cookies from 'https://esm.sh/js-cookie@3'

export function measure(opts = {}) {
    const q = new URLSearchParams({
        title: document.title,
        uuid: (() => {
            const uuid = localStorage.getItem("uuid");
            if (!uuid) {
                const newUuid = window.crypto.randomUUID();
                localStorage.setItem("uuid", newUuid);
                return newUuid;
            }
            return uuid;
        })(),
        sessionid: (() => {
            const sessionId = sessionStorage.getItem("sessionId");
            if (!sessionId) {
                const newSessionId = window.crypto.randomUUID();
                sessionStorage.setItem("sessionId", newSessionId);
                return newSessionId;
            }
            return sessionId;
        })(),
        cookie: Cookies.get('_ga'),
        referrer: document.referrer,
        subdomain: 'narutomania'
    })

    if (opts.extlink) {
        q.set('extlink', opts.extlink)
    }

    return fetch(`https://analyze.naruto-official.com/?${q.toString()}`)
}

window.Analytics = {
    measure
}

measure()