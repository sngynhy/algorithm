function solution(N, stages) {
    var answer = [];
    let cnt = 0
    for (let i=1; i<=N; i++) {
        let res = stages.filter(el => el === i).length
        answer.push({key: i, value: res / (stages.length - cnt)})
        cnt += res
    }
    return answer.sort((a, b) => b.value - a.value).map(el => el.key);
}