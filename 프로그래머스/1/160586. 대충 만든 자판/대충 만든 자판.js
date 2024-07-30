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
        answer.push(target.split('').reduce((acc, curr) => acc += map.get(curr), 0) || -1)
    })
    return answer;
}
