function solution(s) {
    let stack = []
    for (const c of s) {
        c === stack[stack.length - 1] ? stack.pop() : stack.push(c)
    }

    return Number(!stack.length);
}