function solution(answers) {
    const member1 = [1, 2, 3, 4, 5]
    const member2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const member3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let score = [0, 0, 0]
    answers.forEach((el, i) => {
        if (member1[i % member1.length] === el) score[0]++
        if (member2[i % member2.length] === el) score[1]++
        if (member3[i % member3.length] === el) score[2]++
    })
    const max = Math.max(...score)
    let res = []
    score.forEach((el, i) => {
        if (el === max) res.push(i+1)
    })
    return res;
}