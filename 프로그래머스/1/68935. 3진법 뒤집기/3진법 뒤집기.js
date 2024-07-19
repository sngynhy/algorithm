function solution(n) {
    // var answer = ''
    // let quotient = n, remainder = 0 // 몫
    // while (quotient > 0) {
    //     remainder = quotient % 3
    //     quotient = parseInt(quotient / 3)
    //     answer += remainder
    // }
    // let res = 0, i = answer.length - 1
    // for (const c of answer) {
    //     res += (3 ** i * c)
    //     i--
    // }
    // return res;
    
    return parseInt([...n.toString(3)].reverse().join(''), 3)
    // n.toString([radix]) => n을 radix(2와 36 사이의 정수)진수로 변환
    // parseInt(str, [radix]) => str을 radix 진수로 변환
}