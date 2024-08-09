function solution (n) {
    // return n <= 1 ? n % 1234567 : (solution(n-1) + solution(n-2)) % 1234567
    let answer = [0, 1]
    for (let i=2; i<=n; i++) {
        answer.push((answer[i-1] + answer[i-2]) % 1234567)
    }
    return answer[n]
}