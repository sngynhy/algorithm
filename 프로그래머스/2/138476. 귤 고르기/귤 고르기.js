function solution(k, tangerine) {
    var answer = 0;
    // const obj = tangerine.reduce((acc, curr) => {
    //     acc[curr] = (acc[curr] || 0) + 1
    //     return acc
    // }, {})
    const obj = {} 
    tangerine.forEach(el => obj[el] = (obj[el] || 0) + 1)
    const arr = Object.values(obj).sort((a, b) => b - a)
    for (const cnt of arr) {
        answer++
        if (k > cnt) k -= cnt
        else break
    }
    return answer
}