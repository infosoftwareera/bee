function ajax({
    url: o,
    method: r = "GET",
    data: u = null,
    headers: i = {},
    timeout: p = 1e4
}) {
    return new Promise((e, t) => {
        let s = new XMLHttpRequest;
        var n, a;
        for (a in "GET" === (r = r.toUpperCase()) && u && "object" == typeof u && (n = new URLSearchParams(u).toString(), o += (o.includes("?") ? "&" : "?") + n, u = null), s.open(r, o, !0), s.timeout = p, i) i.hasOwnProperty(a) && s.setRequestHeader(a, i[a]);
        s.onreadystatechange = function() {
            if (4 === s.readyState)
                if (200 <= s.status && s.status < 300) try {
                    e(JSON.parse(s.responseText))
                } catch (t) {
                    e(s.responseText)
                } else t({
                    status: s.status,
                    statusText: s.statusText,
                    response: s.responseText
                })
        }, s.onerror = function() {
            t({
                status: 0,
                statusText: "Network Error"
            })
        }, s.ontimeout = function() {
            t({
                status: 0,
                statusText: "Request timed out"
            })
        }, u && ("application/x-www-form-urlencoded" === i["Content-Type"] ? u = new URLSearchParams(u).toString() : "object" != typeof u || u instanceof FormData || (s.setRequestHeader("Content-Type", "application/json"), u = JSON.stringify(u))), s.send(u)
    })
}