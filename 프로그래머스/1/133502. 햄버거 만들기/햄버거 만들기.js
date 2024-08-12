function solution(ingredient) {
    var answer = 0;
    let stack = []
    for (let i=0; i<ingredient.length; i++) {
        stack.push(ingredient[i])
        let len = stack.length
        if (stack[len - 1] === 1 && stack[len - 2] === 3 && stack[len - 3] === 2 && stack[len - 4] === 1) {
            stack.splice(-4)
            answer++
        }
    }
    return answer;
}