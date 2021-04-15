const k = m => {
    if(m.length > 1) {
        const n = Math.floor(m.length / 2)
        let o = m.slice(0, n)
        let p = m.slice(n)
        o = k(o)
        p = k(p)
        const q = r(o, p)
        return q
    }
    return m
    function r(s, t) {
        let u = 0, v = 0, w = []
        while(u < s.length && v < t.length) {
            if(s[u] < t[v]) {
                w.push(s[u])
                u++
            }
            else {
                w.push(t[v])
                v++
            }
        }
        let x
        if(u < v) x = s.slice(u)
        else x = t.slice(v)
        return [...w, ...x]
    }
}