function solution(a, b, n) {
    var answer = 0;
    let x = n, y = 0
    while (x >= a) {
        y = x % a
        x = parseInt(x / a) * b
        answer += x
        if (y > 0 && x + y >= a) {
            x += y
            y = 0
        }
    }
    return answer;
}