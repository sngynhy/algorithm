function solution(food) {
    let answer = '';
    // 각 요소의 값은 짝수여야 함 => 홀수일 시 요소-1로 대체
    // repeat() 사용
    answer = food.map((el, i) => {
        el % 2 !== 0 ? el -= 1 : el
        return String(i).repeat(el/2)
    }).join('')
    return answer + '0' + [...answer].sort().reverse().join('');
}