function solution(s) {
    var answer = 0;
    if (s.length % 2 === 1) return answer
    let map = new Map()
    map.set(')', '(')
    map.set('}', '{')
    map.set(']', '[')
    
    let str = [...s]
    for (let i=0; i<s.length; i++) {
        let first = str.shift(), stack = []
        str.push(first)
        for (let c of str) {
            if (['(', '{', '['].includes(c)) stack.push(c)
            else {
                if (stack.includes(map.get(c))) stack.pop()
            }
        }
        if (stack.length === 0) answer++
    }
    return answer;
}