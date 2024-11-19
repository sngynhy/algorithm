function solution(n,a,b) {
    let answer = 0
    for (let i=0; i<Math.log2(n); i++) {
        if (a === b) break
        a = Math.ceil(a/2)
        b = Math.ceil(b/2)
        answer++
    }
    return answer
}
