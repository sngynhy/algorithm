function solution(X, Y) {
    let answer = '';
    
    const hashX = new Map();
    const hashY = new Map();

    // hashX.get(digit)의 값이 있으면 hashX.get(digit) 반환
    // hashX.get(digit)의 값이 falsy(false, 0, "", null, undefined, NaN)인 경우 우측 값 반환
    for (const digit of X) hashX.set(digit, (hashX.get(digit) || 0) + 1)
    for (const digit of Y) hashY.set(digit, (hashY.get(digit) || 0) + 1)

    for (let i = 9; i >= 0; i--) {
        const char = String(i);
        const count = Math.min(hashX.get(char), hashY.get(char));
        answer += char.repeat(count);
        // 문자열.repeat(정수) => 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환
    }
    
    return answer ? (Number(answer) ? answer : '0') : '-1';
}