function solution(s) {
    let answer = 0;
    let str = ''
    let cnt = 0
    for (const c of s) {
        if (!cnt) {
            str = c
            answer += 1
        }
        str === c ? cnt++ : cnt--
    }
    return answer;
}