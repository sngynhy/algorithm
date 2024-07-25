function solution(n, m) {
    var answer = [];
    let a = Math.max(n, m), b = Math.min(n, m), r = 1
    // 최대공약수
    while (b !== 0) {
        r = a % b
        a = b
        b = r
    }
    answer.push(a)
    // 최소 공배수 * 최대 공약수 = a * b
    answer.push(n * m / a)
    return answer;
}