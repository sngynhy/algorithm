function solution(keymap, targets) {
    var answer = []
    let map = new Map()
    keymap.forEach(el =>{
        el.split('').forEach((c, i) => {
            if (!map.has(c) || map.has(c) && map.get(c) > i + 1) map.set(c, i + 1)
        })
    })
    targets.forEach(el => {
        let flag = false
        let res = el.split('').reduce((acc, curr) => {
            map.has(curr) ? acc += map.get(curr) : flag = true
            return flag ? -1 : acc
        }, 0)
        answer.push(res)
    })
    return answer
}