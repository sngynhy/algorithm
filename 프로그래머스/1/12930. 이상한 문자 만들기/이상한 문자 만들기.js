function solution(s) {
    var answer = s.split(' ').map((string, i) => {
        return string.split('').map((char, j) => {
            return j % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        }).join('')
    }).join(' ')
    return answer;
}