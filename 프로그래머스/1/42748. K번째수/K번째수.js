function solution(array, commands) {
    var answer = [];
    commands.map((el, index) => {
        let [i, j, k] = el
        answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1])
    })
    return answer;
}