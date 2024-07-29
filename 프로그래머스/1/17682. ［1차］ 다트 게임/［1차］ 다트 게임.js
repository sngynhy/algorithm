function solution(dartResult) {
    var answer = []
    let bonus = new Map()
    bonus.set('S', 1)
    bonus.set('D', 2)
    bonus.set('T', 3)

    let score = []
    let flag = true
    dartResult.split('').forEach(el => {
        let i = score.length - 1
        switch (el) {
            case 'S':
            case 'D':
            case 'T':
                answer.push(Math.pow(score[i], bonus.get(el)))
                flag = true
                break
            case '*':
                if (i === 0) answer[0] *= 2
                else { answer[i - 1] *= 2; answer[i] *= 2 }
                flag = true
                break
            case '#':
                answer[i] = answer[i] * -1
                flag = true
                break
            default:
                if (flag) score.push(Number(el))
                else score[i] = Number(score[i] + el)
                flag = false
        }
    })
    return answer.reduce((acc, curr) => acc + curr, 0);
}