function solution(n, m, section) {
    var answer = 0;
    // let max = Math.max(...section), min = Math.min(...section)
    // while (min <= max) {
    //     if (!section.includes(min)) {
    //         min++
    //         continue
    //     }
    //     answer++
    //     min += m
    // }
    var painted = 0
    for(var s of section) {
        if(painted < s) {
            answer++
            painted = s + m - 1
        }
    }
    return answer;
}