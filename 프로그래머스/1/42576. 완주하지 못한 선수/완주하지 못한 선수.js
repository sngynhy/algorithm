function solution(participant, completion) {
    let map = new Map()
    for (const p of completion) {
        map.set(p, map.get(p) ? map.get(p) + 1 : 1)
    }
    for (const p of participant) {
        if (!map.has(p) || map.get(p) < 1) return p
        map.set(p, map.get(p) - 1)
    }
}