function solution(s) {
    var answer = '';
    let flag = true
    for (const v of s) {
        if (v === ' ') {
            answer += v
            flag = true
        } else {
            answer += flag ? v.toUpperCase() : v.toLowerCase()
            flag = false
        }
    }
    return answer;
}