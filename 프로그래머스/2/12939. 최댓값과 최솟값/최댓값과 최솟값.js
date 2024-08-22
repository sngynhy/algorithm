function solution(s) {
    let res = s.split(' ')
    return Math.min(...res) + ' ' +  Math.max(...res);
}