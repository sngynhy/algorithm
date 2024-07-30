function solution(keymap, targets) {
    var answer = [];
    let map = new Map()
    keymap.forEach(str => {
        str.split('').forEach((c, j) => {
            let index = map.get(c) 
            !index ? map.set(c, j+1) : index > j+1 ? map.set(c, j+1) : null
        })
    })
    targets.forEach(target => {
        let sum = 0
        for (const c of target) {
            if (!map.has(c)) { sum = -1; break }
            sum += map.get(c)
        }
        answer.push(sum)
        // answer.push(target.split('').reduce((acc, curr) => map.has(curr) ? acc += map.get(curr) : -1, 0))
    })
    return answer;
}