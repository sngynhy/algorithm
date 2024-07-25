function solution(n, m, section) {
    var answer = 0;
    let max = Math.max(...section), min = Math.min(...section)
    while (min <= max) {
        if (!section.includes(min)) {
            min++
            continue
        }
        answer++
        min += m
    }
    return answer;
}