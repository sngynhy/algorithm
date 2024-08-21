function solution(n, lost, reserve) {
    const lostTemp = lost.filter(el => !reserve.includes(el)).sort()
    const reserveTemp = reserve.filter(el => !lost.includes(el)).sort()
    let count = Array(n).fill(1).map((el, i) => lost.includes(i+1) ? --el : reserve.includes(i+1) ? ++el : el)
    let answer = n - lostTemp.length
    for (let i=0; i<lostTemp.length; i++) {
        let loster = lostTemp[i]
        let prev = count[loster-2], next = count[loster]
        if (!prev && !next) continue
        if (prev > 1) {
            answer += 1
            count[loster-2] -= 1
        } else if (next > 1) {
            answer += 1
            count[loster] -= 1
        }
    }
    return answer;
}