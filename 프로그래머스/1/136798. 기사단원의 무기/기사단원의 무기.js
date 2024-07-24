function solution(number, limit, power) {
    let answer = 0;
    let divisors = []
    for (let j=1; j<=number; j++) {
        let cnt = 0
        for (let i=1; i<=Math.sqrt(j); i++) {
            if (j % i === 0) {
                cnt++
                if (i !== Math.sqrt(j)) cnt++
            }
        }
        answer += cnt > limit ? power : cnt
        divisors.push(cnt)
    }
    return answer
}