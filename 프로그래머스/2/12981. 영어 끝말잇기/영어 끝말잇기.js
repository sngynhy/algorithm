function solution(n, words) {
    let answer = [0, 0]; // [사람 번호, 게임 차례]
    let arr = []
    for (let i=1; i<=words.length; i++) {
        if (arr.indexOf(words[i-1]) > -1 || i > 1 && arr.slice(-1)[0].slice(-1) !== words[i-1][0]) {
            answer[0] = i % n === 0 ? n : i % n
            answer[1] = Math.ceil(i/n)
            break
        }
        arr.push(words[i-1])
    }
    return answer;
}