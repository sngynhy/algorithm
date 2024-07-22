function solution(k, score) {
    var answer = [];
    let arr = []
    score.forEach((el, i) => {
        if (i < k) {
            arr.push(el)
        } else {
            if (Math.min(...arr) < el) {
                arr.sort((a, b) => b - a).pop()
                arr.push(el)
            }
        }
        answer.push(Math.min(...arr))
    })
    return answer;
}