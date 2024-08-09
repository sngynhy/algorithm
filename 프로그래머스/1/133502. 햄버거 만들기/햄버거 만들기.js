function solution(ingredient) {
    var answer = 0;
    let stack = []
    for (let i=0; i<ingredient.length; i++) {
        stack.push(ingredient[i])
        let len = stack.length
        if (stack.length > 3 && stack.slice(len-4, len).join('') === '1231') {
            stack.splice(len-4, len)
            answer += 1
        }
    }
    return answer;
}