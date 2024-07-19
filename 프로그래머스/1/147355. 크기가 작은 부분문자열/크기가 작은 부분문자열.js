function solution(t, p) {
    var answer = 0;
    let tLen = t.length, pLen = p.length
    for (i=0; i <= tLen - pLen; i++) {
        if (+t.substring(i, i + pLen) <= +p) answer++
    }
    return answer;
}