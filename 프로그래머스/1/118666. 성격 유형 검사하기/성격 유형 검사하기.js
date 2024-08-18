function solution(survey, choices) {
    var answer = '';
    // 성격 유형
    let type = ['RT', 'CF', 'JM', 'AN']
    // 성격 유형 점수
    let score = [3, 2, 1, 0, 1, 2, 3]
    let map = new Map()
    survey.forEach((el, i) => {
        let temp = 0
        switch (choices[i]) {
            case 1:
            case 2:
            case 3:
                temp = map.get(el[0]) || 0
                map.set(el[0], temp + score[choices[i]-1])
                break
            case 5:
            case 6:
            case 7:
                temp = map.get(el[1]) || 0
                map.set(el[1], temp + score[choices[i]-1])
                break
        }
    })
    type.forEach(el => {
        let score1 = map.get(el[0]) || 0, score2 = map.get(el[1]) || 0
        answer += score1 >= score2 ? el[0] : el[1]
    })
    return answer;
}