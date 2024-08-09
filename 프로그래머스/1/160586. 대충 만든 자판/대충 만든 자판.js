function solution(keymap, targets) {
    var answer = []
    let map = new Map()
    keymap.forEach(el =>{
        el.split('').forEach((c, i) => {
            if (!map.has(c) || map.has(c) && map.get(c) > i + 1) map.set(c, i + 1)
        })
    })
    targets.forEach(el => {
        answer.push(el.split('').reduce((acc, curr) => acc += map.get(curr), 0) || -1)
    })
    return answer
}