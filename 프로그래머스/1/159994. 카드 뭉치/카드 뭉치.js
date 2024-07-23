function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    goal.forEach(el => {
        if (el === cards1[0] || el === cards2[0]) cards1[0] === el ? cards1.shift() : cards2.shift()
        else answer = 'No'
    })
    return answer;
}