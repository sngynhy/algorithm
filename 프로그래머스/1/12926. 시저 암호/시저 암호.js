function solution(s, n) {
    var answer = '';
    for (const c of s) {
        let code = c.charCodeAt()
        if ((c === c.toUpperCase() && code + n > 90) || (c === c.toLowerCase() && code + n > 122)) {
            code = code + n - 26
        } else {
            code === 32 ? code = code : code += n
        }
        answer += String.fromCharCode(code)
    }
    return answer;
}