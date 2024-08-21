function solution(participant, completion) {
    let map = new Map()
    for (const p of participant) {
        map.set(p, map.get(p) ? map.get(p) + 1 : 1)
    }
    for (const p of completion) {
        map.set(p, map.get(p) - 1)
    }
    for (const [key, val] of map) {
        if (val > 0) return key
    }
}