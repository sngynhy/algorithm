function solution(n) {
    var answer = n + 1;
    let count = removeBinaryZero(n)
    while (true) {
        if (count === removeBinaryZero(answer)) break
        answer++
    }
    return answer;
}
function removeBinaryZero(n) {
    return n.toString(2).replaceAll('0', '').length // OR replace(/0/g, '')
}