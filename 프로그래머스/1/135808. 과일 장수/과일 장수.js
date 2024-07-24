function solution(k, m, score) {
    var answer = 0;
    let box = []
    score.sort((a, b) => b - a).forEach(el => {
        box.push(el)
        if (box.length === m) {
            answer += el * m
            box = []
        }
    })
    return answer;
}