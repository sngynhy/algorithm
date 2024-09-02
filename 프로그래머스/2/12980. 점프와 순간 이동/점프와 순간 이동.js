function solution(n) {
    let answer = 0;
    // 도착 지점에서 반대로 출발
    // n이 2로 나누어 떨어지면 순간이동
    // n이 2로 나누어 떨어지지 않으면 점프
    while (n > 0) {
        if (n % 2 === 0) {
            n /= 2
        } else {
            ++answer
            n -= 1
        }
    }
    return answer;
}