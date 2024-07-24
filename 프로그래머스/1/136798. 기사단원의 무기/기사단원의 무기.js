function solution(number, limit, power) {
    let divisors = []
    for (let j=1; j<=number; j++) {
        let cnt = 0
        for (let i=1; i<=Math.sqrt(j); i++) {
            if (j % i === 0) {
                cnt++
                if (i !== Math.sqrt(j)) cnt++
            }
        }
        divisors.push(cnt)
    }
    let answer = 0;
    divisors.forEach(el => {
        answer += el > limit ? power : el
    })
    return answer
}