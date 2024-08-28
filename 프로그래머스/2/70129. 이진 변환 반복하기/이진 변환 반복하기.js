function solution(s) {
    let answer = [0, 0]; // 변환 횟수, 제거된 0의 갯수
    let c = s
    while (c !== '1') {
        let zeroCnt = 0
        let str = ''
        for (const v of c) {
            if (v === '0') zeroCnt++
        }
        c = (c.length - zeroCnt).toString(2)
        answer[1] += zeroCnt
        answer[0] += 1
    }
    return answer;
}